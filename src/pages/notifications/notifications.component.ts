import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavContent } from "@angular/material/sidenav";

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [RouterOutlet, MatSidenavContent],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent {

}
