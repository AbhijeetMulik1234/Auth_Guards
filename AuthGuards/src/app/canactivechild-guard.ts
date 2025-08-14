import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

export const canactivechildGuard: CanActivateChildFn = (childRoute, state) => {
  const router = inject(Router);
  const isLogedIn = localStorage.getItem('isLoggedItem');

  if (isLogedIn === 'true') {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
