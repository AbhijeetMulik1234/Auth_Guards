import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';

export const canmatchGuard: CanMatchFn = (route, segments) => {
  const router = inject(Router);
  const isLogedIn = localStorage.getItem('isLoggedIn');

  if (isLogedIn === 'true') {
    return true; // here route match
  } else {
    router.navigate(['/login']);
    return false;
  }
};
