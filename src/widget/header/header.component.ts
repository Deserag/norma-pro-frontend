import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { EroutesConstants } from '../../routes';
import { AuthService, UserService } from '../../entity';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';

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
    NgIf,
    CommonModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  protected readonly ERoutesConstans = EroutesConstants;
  readonly #authService = inject(AuthService);
  readonly #userApiService = inject(UserService);

  userName = '';
  userRoleId = '';
  rolesMap = new Map<string, string>();

  isRolesLoaded = false;
  isMobileMenuOpen = false;

  menuItems = [
    { label: 'Главная', route: '/main/home' },
    { label: 'Документы', route: '/main/documents' },
    { label: 'Проекты', route: '/main/projects' },
    { label: 'Клиенты', route: '/main/clients' },
    { label: 'Уведомления', route: '/main/notifications' },
    { label: 'Пользователи', route: '/main/users' },
  ];

  constructor() {
    if (this.isAuthenticated) {
      const user = this.#authService.user;
      if (user && user.id) {
      } else {
        this.userName = 'Гость';
        this.userRoleId = '';
      }
    } else {
      this.userName = 'Гость';
      this.userRoleId = '';
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

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