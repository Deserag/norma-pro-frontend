import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavContent } from "@angular/material/sidenav";

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [RouterOutlet, MatSidenavContent],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.scss'
})
export class AdminPanelComponent {

}
