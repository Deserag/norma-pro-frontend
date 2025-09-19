import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EroutesConstants } from '../../routes';

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.scss'
})
export class AdminPanelComponent {
  protected readonly ERoutesConstans = EroutesConstants;

}
