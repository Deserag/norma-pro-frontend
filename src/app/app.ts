import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';
import { FormsModule, NgModel } from '@angular/forms';

interface Project {
  id: number;
  name: string;
  status: 'active' | 'completed' | 'pending';
  files: { name: string; url: string }[];
}

interface User {
  id: number;
  name: string;
  role: string;
}

interface Department {
  name: string;
  users: User[];
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  customer = {
    name: 'ООО "Ромашка"',
    orders: [
      {
        id: 'ORD-001',
        status: 'В обработке',
        files: [
          { name: 'ГОСТ 21.101-2020.pdf', type: 'ГОСТ', expirationDate: '2026-12-31', size: '2.5 MB', uploaded: '2025-09-01' },
          { name: 'Техническое задание.docx', type: 'Документ', expirationDate: '2025-11-15', size: '1.2 MB', uploaded: '2025-08-15' },
          { name: 'Схема проекта v2.png', type: 'Чертеж', expirationDate: '2025-10-10', size: '3.1 MB', uploaded: '2025-09-03' }
        ]
      },
      {
        id: 'ORD-002',
        status: 'Завершен',
        files: [
          { name: 'ГОСТ 2.105-95.pdf', type: 'ГОСТ', expirationDate: '2027-03-20', size: '1.8 MB', uploaded: '2025-08-20' },
          { name: 'Схема проекта.png', type: 'Чертеж', expirationDate: '2025-09-30', size: '2.9 MB', uploaded: '2025-08-25' },
          { name: 'Отчет по проекту.pdf', type: 'Отчет', expirationDate: '2026-01-15', size: '4.0 MB', uploaded: '2025-09-02' }
        ]
      },
      {
        id: 'ORD-003',
        status: 'Ожидает оплаты',
        files: [
          { name: 'ГОСТ 7.32-2017.pdf', type: 'ГОСТ', expirationDate: '2028-06-30', size: '2.0 MB', uploaded: '2025-09-04' }
        ]
      }
    ],
    employees: [
      { fullName: 'Иванов Иван Иванович', role: 'Менеджер проекта', email: 'ivanov@example.com', phone: '+7 (999) 123-45-67' },
      { fullName: 'Петров Сергей Александрович', role: 'Инженер', email: 'petrov@example.com', phone: '+7 (999) 234-56-78' },
      { fullName: 'Сидорова Анна Михайловна', role: 'Аналитик', email: 'sidorova@example.com', phone: '+7 (999) 345-67-89' },
      { fullName: 'Козлов Дмитрий Сергеевич', role: 'Технический директор', email: 'kozlov@example.com', phone: '+7 (999) 456-78-90' }
    ],
    searchQuery: ''
  };

  onSearch() {
    // Placeholder for search functionality
    console.log('Searching for:', this.customer.searchQuery);
  }
}
