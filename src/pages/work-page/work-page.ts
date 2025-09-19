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
import { CardFileComponent,CardOrderComponent,CardProjectComponent, CardUserComponent} from '../../widget';

@Component({
  selector: 'app-work-page',
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
    CardFileComponent,
    CardOrderComponent,
    CardProjectComponent,
    CardUserComponent,
  ],
  templateUrl: './work-page.html',
  styleUrl: './work-page.scss'
})
export class WorkPage {
  protected readonly ERoutesConstans = EroutesConstants;
  readonly #authService = inject(AuthService);

  user: IResAuthUserInfo| null = null;
  userName = 'Гость';
  userRole = '';
  searchQuery = '';

  dashboardItems = [
    {
      type: 'project',
      icon: 'assignment',
      label: 'Проекты',
      route: '/main/projects',
      description: 'Ваши рабочие проекты',
    },
    {
      type: 'user',
      icon: 'group',
      label: 'Пользователи',
      route: '/main/users',
      description: 'Управление пользователями',
    },
    {
      type: 'file',
      icon: 'folder',
      label: 'Файлы',
      route: '/main/files',
      description: 'Загруженные файлы',
    },
    {
      type: 'order',
      icon: 'description',
      label: 'Документы',
      route: '/main/documents',
      description: 'Поиск и управление ГОСТами',
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
    }
  }

  get isAdmin(): boolean {
    return this.userRole === ERoles.ADMIN || this.userRole === ERoles.SUPER_ADMIN;
  }
}