import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const canactiveGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isLogedIn = localStorage.getItem('isLoggedIn');

  if (isLogedIn === 'true') {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
