import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

export const canactivechildGuard: CanActivateChildFn = (childRoute, state) => {
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
