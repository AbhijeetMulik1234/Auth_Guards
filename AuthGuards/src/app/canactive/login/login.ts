import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(private router: Router) {}

  login() {
    localStorage.setItem('isLoggedItem', 'true');
    this.router.navigate(['/dashboard']);
  }
}
