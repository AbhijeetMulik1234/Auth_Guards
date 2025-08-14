import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard-child',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './dashboard-child.html',
  styleUrl: './dashboard-child.css',
})
export class DashboardChild {}
