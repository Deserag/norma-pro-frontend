import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavContent } from "@angular/material/sidenav";

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [RouterOutlet, MatSidenavContent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {

}
