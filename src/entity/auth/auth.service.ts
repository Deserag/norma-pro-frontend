import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { EAuthKeys, IReqAuthLogin, IResAuthLogin, IResAuthUserInfo } from './auth.interface';
import { v7 } from 'uuid';
import { Router } from '@angular/router';
import { EroutesConstants } from '../../routes';
import { IApiUrls } from '../api-url.token';
import { API_URLS } from '../api-url.token';
@Injectable({ providedIn: 'root' })
export class AuthService {
  isAuthenticated$ = new BehaviorSubject<boolean>(this.isAuthenticated());
  private _user$ = new BehaviorSubject<IResAuthUserInfo | null>(this.user);

  constructor(
    private _http: HttpClient,
    @Inject(API_URLS) readonly apiUrls: IApiUrls,
    private _router: Router
  ) {}

   init(): void {
    const user = this.user;
    const hasRoleInStorage = !!localStorage.getItem(EAuthKeys.ROLE);

    if (this.isAuthenticated() && user && !hasRoleInStorage && user.roles?.length) {
    localStorage.setItem(EAuthKeys.ROLE, user.roles[0]);
  }

  }

  get token(): string | null {
    return sessionStorage.getItem(EAuthKeys.TOKEN) || localStorage.getItem(EAuthKeys.TOKEN);
  }

  get deviceId(): string {
    let deviceId: string | null = localStorage.getItem(EAuthKeys.DEVICE_ID);
    if (!deviceId) {
      deviceId = v7();
      localStorage.setItem(EAuthKeys.DEVICE_ID, deviceId);
    }
    return deviceId;
  }

  get user(): IResAuthUserInfo | null {
    const user = localStorage.getItem(EAuthKeys.USER);
    return user ? JSON.parse(user) : null;
  }

  get user$(): Observable<IResAuthUserInfo | null> {
    return this._user$.asObservable();
  }

  login(data: IReqAuthLogin): Observable<IResAuthLogin> {
    return this._http
      .post<IResAuthLogin>(`${this.apiUrls.authService}auth/sign-in`, data)
      .pipe(
        tap((res) => {
          if (res.accessToken && res.user) {
            this.setToken(res, true);
            this.setUser(res.user);
            this.isAuthenticated$.next(true);
          }
        })
      );
  }

  setToken(data: IResAuthLogin, rememberMe: boolean): void {
    rememberMe
      ? localStorage.setItem(EAuthKeys.TOKEN, data.accessToken)
      : sessionStorage.setItem(EAuthKeys.TOKEN, data.accessToken);
  }

  setUser(user: IResAuthUserInfo): void {
    localStorage.setItem(EAuthKeys.USER, JSON.stringify(user));
    this._user$.next(user);
  }

  isAuthenticated(): boolean {
    return !!this.token && !!this.user;
  }

  logout(): void {
    sessionStorage.removeItem(EAuthKeys.TOKEN);
    localStorage.removeItem(EAuthKeys.TOKEN);
    localStorage.removeItem(EAuthKeys.USER);
    this.isAuthenticated$.next(false);
    this._user$.next(null);
    this._router.navigate([EroutesConstants.AUTH, EroutesConstants.LOGIN]).then();
  }

  refresh(): Observable<{ accessToken: string }> {
    return this._http
      .post<{ accessToken: string }>(
        `${this.apiUrls.authService}/api/auth/refresh-tokens`,
        { deviceId: this.deviceId }
      )
      .pipe(
        tap((data) => {
          const res: IResAuthLogin = {
            accessToken: data.accessToken,
            user: this.user!
          };
          this.setToken(res, true);
        })
      );
  }
}
