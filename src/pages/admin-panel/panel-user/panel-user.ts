import { Component } from '@angular/core';
import { IUser,  IRole, IResTablePage, IReqPage } from '../../../entity';
import { UserCardPanel } from "../../../widget/admin-panel/user-card-panel/user-card-panel";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-panel-user',
  standalone: true,
  templateUrl: './panel-user.html',
  styleUrls: ['./panel-user.scss'],
  imports: [UserCardPanel, NgFor]
})
export class PanelUser {
  users: IUser[] = [];
  pageInfo: IResTablePage<IUser>['infoPage'] = { page: 1, pageSize: 10, totalCount: 0, totalPages: 1 };
  currentPage = 1;

  private mockUsers: IUser[] = [
    {
      id: 'user1',
      firstName: 'Иван',
      lastName: 'Иванов',
      middleName: 'Петрович',
      birthDate: new Date(1990, 0, 1),
      departments: ['Отдел 1'],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      login: 'ivanov',
      email: 'ivanov@example.com',
      password: 'pass1',
      roleId: 'role1',
      telegramId: 'telegram1',
      avatarUrl: '',
      files: { id: 'file1', name: 'Документ 1.pdf', type: 'PDF', createdAt: new Date() }
    },
    {
      id: 'user2',
      firstName: 'Мария',
      lastName: 'Петрова',
      middleName: '',
      birthDate: new Date(1995, 5, 15),
      departments: ['Отдел 2'],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      login: 'petrova',
      email: 'petrova@example.com',
      password: 'pass2',
      roleId: 'role2',
      telegramId: null,
      avatarUrl: '',
      files: { id: 'file1', name: 'Документ 1.pdf', type: 'PDF', createdAt: new Date() }
    },
    {
      id: 'user3',
      firstName: 'Алексей',
      lastName: 'Сидоров',
      middleName: 'Александрович',
      birthDate: new Date(1985, 11, 10),
      departments: ['Отдел 1', 'Отдел 3'],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      login: 'sidorov',
      email: 'sidorov@example.com',
      password: 'pass3',
      roleId: 'role1',
      telegramId: 'telegram3',
      avatarUrl: '',
      files: { id: 'file1', name: 'Документ 1.pdf', type: 'PDF', createdAt: new Date() }
    },
    {
      id: 'user4',
      firstName: 'Елена',
      lastName: 'Козлова',
      middleName: '',
      birthDate: new Date(1992, 3, 20),
      departments: ['Отдел 2'],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      login: 'kozlova',
      email: 'kozlova@example.com',
      password: 'pass4',
      roleId: 'role2',
      telegramId: null,
      avatarUrl: '',
      files: { id: 'file1', name: 'Документ 1.pdf', type: 'PDF', createdAt: new Date() }
    },
    {
      id: 'user5',
      firstName: 'Дмитрий',
      lastName: 'Новиков',
      middleName: 'Сергеевич',
      birthDate: new Date(1988, 8, 5),
      departments: ['Отдел 3'],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      login: 'novikov',
      email: 'novikov@example.com',
      password: 'pass5',
      roleId: 'role1',
      telegramId: 'telegram5',
      avatarUrl: '',
      files: { id: 'file1', name: 'Документ 1.pdf', type: 'PDF', createdAt: new Date() }
    }
  ];

  constructor() {
    this.loadUsers();
  }

  loadUsers() {
    const req: IReqPage = { page: this.currentPage, pageSize: this.pageInfo.pageSize };
    const start = (req.page - 1) * req.pageSize;
    const end = start + req.pageSize;
    this.users = this.mockUsers.slice(start, end);
    this.pageInfo.totalCount = this.mockUsers.length;
    this.pageInfo.totalPages = Math.ceil(this.pageInfo.totalCount / this.pageInfo.pageSize);
    this.pageInfo.page = this.currentPage;
  }

  onPageChange(page: number) {
    if (page >= 1 && page <= this.pageInfo.totalPages) {
      this.currentPage = page;
      this.loadUsers();
    }
  }

  onCreateUser() {
    console.log('Открытие формы создания пользователя (в разработке)');
  }

  getPageNumbers() {
    const pages: number[] = [];
    const maxPagesToShow = 5;
    let startPage = Math.max(1, this.currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(this.pageInfo.totalPages, startPage + maxPagesToShow - 1);

    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  }
}