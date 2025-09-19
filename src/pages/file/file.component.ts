import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavContent } from "@angular/material/sidenav";

@Component({
  selector: 'app-file',
  standalone: true,
  imports: [RouterOutlet, MatSidenavContent],
  templateUrl: './file.component.html',
  styleUrl: './file.component.scss'
})
export class FileComponent {

}
