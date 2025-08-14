import { CanDeactivateFn } from '@angular/router';

export const candeactivateGuard: CanDeactivateFn<unknown> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  const confirmLeave = confirm(
    'if you really need to leave this page, if your unsaved changes are there they are gone.'
  );
  return confirmLeave; //if true --- it can go , if false --- it can stop
};
