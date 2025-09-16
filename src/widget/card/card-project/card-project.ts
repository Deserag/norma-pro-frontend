import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-project',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    RouterLink
  ],
  templateUrl: './card-project.html',
  styleUrls: ['./card-project.scss']
})
export class CardProjectComponent {
  @Input() title!: string;
  @Input() subtitle?: string;
  @Input() description?: string;
  @Input() icon: string = 'work';
  @Input() link?: string;
}