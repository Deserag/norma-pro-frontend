import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavContent } from "@angular/material/sidenav";

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [RouterOutlet, MatSidenavContent],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent {

}
