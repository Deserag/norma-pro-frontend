import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../widget';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    RouterOutlet
],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent  {

}