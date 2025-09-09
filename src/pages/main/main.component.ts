import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../entity';
import { IResAuthUserInfo } from '../../entity';
import { ERoles } from '../../entity';
import { EroutesConstants } from '../../routes';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../widget/header/header.component';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    RouterLink,
    FormsModule,
    HeaderComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  protected readonly ERoutesConstans = EroutesConstants;
  readonly #authService = inject(AuthService);

  user: IResAuthUserInfo | null = null;
  userName = 'Гость';
  userRole = '';
  searchQuery = '';

  dashboardItems = [
    {
      icon: 'description',
      label: 'Документы',
      route: '/main/documents',
      description: 'Поиск и управление ГОСТами',
    },
    {
      icon: 'assignment',
      label: 'Проекты',
      route: '/main/projects',
      description: 'Ваши рабочие проекты',
    },
    {
      icon: 'group',
      label: 'Клиенты',
      route: '/main/clients',
      description: 'Управление клиентами',
    },
    {
      icon: 'notifications',
      label: 'Уведомления',
      route: '/main/notifications',
      description: 'Обновления и изменения',
    },
    { icon: 'folder', label: 'Файлы', route: '/main/files', description: 'Загруженные файлы' },
    {
      icon: 'admin_panel_settings',
      label: 'Админка',
      route: '/main/admin',
      description: 'Управление пользователями',
      adminOnly: true,
    },
  ];

  recentItems = [
    {
      name: 'ГОСТ 21.101-2020',
      type: 'Документ',
      updatedAt: '2025-09-08',
      route: '/main/documents/1',
    },
    { name: 'Проект Alpha', type: 'Проект', updatedAt: '2025-09-07', route: '/main/projects/1' },
    {
      name: 'ГОСТ 2.105-95',
      type: 'Документ',
      updatedAt: '2025-09-06',
      route: '/main/documents/2',
    },
  ];

  notifications = [
    { message: 'Новый ГОСТ добавлен', date: '2025-09-09', route: '/main/notifications/1' },
    { message: 'Проект Beta обновлён', date: '2025-09-08', route: '/main/notifications/2' },
    { message: 'Клиент добавил запрос', date: '2025-09-07', route: '/main/notifications/3' },
  ];

  ngOnInit() {
    this.user = this.#authService.user;
    if (this.user) {
      this.userName = this.user.username || this.user.login;
      this.userRole = Array.isArray(this.user.roles) ? this.user.roles[0] : this.user.roles;
    }
  }

  onSearch() {
    if (this.searchQuery.trim()) {
      console.log('Поиск ГОСТов:', this.searchQuery);
      // Здесь будет вызов API или переход на страницу поиска
    }
  }

  get isAdmin(): boolean {
    return this.userRole === ERoles.ADMIN || this.userRole === ERoles.SUPER_ADMIN;
  }
}
