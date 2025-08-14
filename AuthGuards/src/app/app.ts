import { Component, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('AuthGuards');

  constructor(private router: Router) {}
  goToLogin() {
    localStorage.removeItem('isLoggedIn'); // clear login status
    this.router.navigate(['/login']); // navigate to login
  }
}
