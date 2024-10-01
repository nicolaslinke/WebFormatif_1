import { CanActivateFn, createUrlTreeFromSnapshot } from '@angular/router';

export const catLoverGuard: CanActivateFn = (route, state) => {

    let user = JSON.parse(localStorage.getItem("user")!);
    console.log(user.prefercat);
    if (user.prefercat == false)
    {
      return createUrlTreeFromSnapshot(route, ['/dog']);
    }
    else
    return true;
};
