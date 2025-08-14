import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const canactiveGuard: CanActivateFn = (route, state) => {
  debugger;
  const router = inject(Router);
  const isLogedIn = localStorage.getItem('isLoggedItem');

  if (isLogedIn === 'true') {
    debugger;
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
