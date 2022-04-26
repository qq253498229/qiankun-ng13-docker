import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChild, Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivateChild {


  constructor(private router: Router) {
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('auth guard, from:%s, to:%s', this.router.url, state.url);
    return true;
  }

}
