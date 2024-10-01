import { CanActivateFn, createUrlTreeFromSnapshot } from '@angular/router';

export const loggedGuard: CanActivateFn = (route, state) => {

  if(localStorage.getItem("user") == null)
  {
      return createUrlTreeFromSnapshot(route, ['/login']);
  }
  else
  return true;
};
