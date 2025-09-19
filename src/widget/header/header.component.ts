import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { EroutesConstants } from '../../routes';
import { AuthService, UserApiService, IGetUser } from '../../entity';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    RouterLink,
    RouterLinkActive,
    MatMenuModule,
    CommonModule,
],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  protected readonly ERoutesConstans = EroutesConstants;
  readonly #authService = inject(AuthService);
  readonly #userApiService = inject(UserApiService);

  userName = '';
  userRoleId = '';
  rolesMap = new Map<string, string>();

  isRolesLoaded = false;
  isMobileMenuOpen = false;

  constructor() {
    // this.loadUserInfoAndRoles();
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleClientMobileMenu() {
    // Logic to toggle client submenu in mobile view if needed
  }

  toggleUserMobileMenu() {
    // Logic to toggle user submenu in mobile view if needed
  }

  toggleAdminMobileMenu() {
    // Logic to toggle admin submenu in mobile view if needed
  }

  toggleFileMobileMenu() {
    // Logic to toggle file submenu in mobile view if needed
  }

  toggleNotificationMobileMenu() {
    // Logic to toggle notification submenu in mobile view if needed
  }

  // loadUserInfoAndRoles() {
  //   const userId = localStorage.getItem('userId');
  //   if (userId) {
  //     this.#userApiService.getUserInfo(userId).subscribe({
  //       next: (response: IGetUser) => {
  //         const { firstName = '', lastName = '', roleId = '' } = response.user;
  //         this.userName = `${lastName} ${firstName}`.trim() || 'Имя пользователя';
  //         this.userRoleId = roleId;
  //         this.loadRoles();
  //       },
  //       error: () => {
  //         this.userName = 'Имя пользователя';
  //       },
  //     });
  //   } else {
  //     this.userName = 'Гость';
  //     this.userRoleId = '';
  //   }
  // }

  // loadRoles() {
  //   this.#userApiService.getUserRole({ name: '', page: 1, pageSize: 10 }).subscribe({
  //     next: (roles) => {
  //       roles.rows.forEach((r) => {
  //         this.rolesMap.set(r.name.toLowerCase(), r.id);
  //       });
  //       this.isRolesLoaded = true;
  //     },
  //     error: () => {
  //       this.isRolesLoaded = false;
  //     },
  //   });
  // }


  onClickLogOut() {
    this.#authService.logout();
  }

  get isAuthenticated(): boolean {
    return this.#authService.isAuthenticated();
  }

  get isAdminOrSuperAdmin(): boolean {
    if (!this.isRolesLoaded || !this.userRoleId) return false;
    const adminId = this.rolesMap.get('admin');
    const superAdminId = this.rolesMap.get('superadmin');
    return this.userRoleId === adminId || this.userRoleId === superAdminId;
  }
}