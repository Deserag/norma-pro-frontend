// src/app/auth/auth.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { AuthService, IReqAuthLogin, IResAuthUserInfo, ERoles, EAuthKeys } from '../../entity';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    RouterLink,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;
  submitted = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    const loginData: IReqAuthLogin = {
      login: this.loginForm.value.login?.trim() || '',
      password: this.loginForm.value.password || '',
      deviceId: this.authService.deviceId,
    };

    // Тестовая авторизация для admin@mail.com и admin1234
    if (loginData.login === 'admin@mail.com' && loginData.password === 'admin1234') {
      const testUser: IResAuthUserInfo = {
        id: 'test-admin-id',
        login: loginData.login,
        username: 'Super Admin',
        roles: [ERoles.SUPER_ADMIN],
        updatedAt: new Date().toISOString(),
      };
      this.authService.setUser(testUser);
      const storage = this.loginForm.value.rememberMe ? localStorage : sessionStorage;
      storage.setItem(EAuthKeys.TOKEN, 'test-token');
      storage.setItem(EAuthKeys.ROLE, ERoles.SUPER_ADMIN);
      this.authService.isAuthenticated$.next(true);
      this.router.navigate(['/main']).then(() => {
        console.log('Test login successful, redirected to /main');
      });
      return;
    }

    // Реальный API запрос
    this.authService.login(loginData).subscribe({
      next: () => {
        this.router.navigate(['/main']).then(() => {
          console.log('API login successful, redirected to /main');
        });
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Ошибка авторизации';
      },
    });
  }

  get login() {
    return this.loginForm.get('login');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
