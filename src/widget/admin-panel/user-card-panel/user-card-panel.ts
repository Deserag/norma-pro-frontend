import { Component, Input } from '@angular/core';
import { IUser } from '../../../entity';
import { NgIf, DatePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

interface File {
  name: string;
  type: string;
  createdAt: Date;
}

@Component({
  selector: 'app-user-card-panel',
  standalone: true,
  imports: [NgIf, DatePipe, MatButtonModule, MatIconModule, MatListModule],
  templateUrl: './user-card-panel.html',
  styleUrls: ['./user-card-panel.scss']
})
export class UserCardPanel {
  @Input() user!: IUser;

  files: File[] = [
    { name: 'Документ 1.pdf', type: 'PDF', createdAt: new Date() },
    { name: 'Отчет.xlsx', type: 'Excel', createdAt: new Date() },
    { name: 'Фото.jpg', type: 'Image', createdAt: new Date() }
  ];

  onEdit(): void {
    console.log(`Редактирование пользователя ${this.user.firstName} ${this.user.lastName}`);
  }

  onDelete(): void {
    console.log(`Удаление пользователя ${this.user.firstName} ${this.user.lastName}`);
    if (confirm(`Вы уверены, что хотите удалить ${this.user.firstName} ${this.user.lastName}?`)) {
    }
  }
}