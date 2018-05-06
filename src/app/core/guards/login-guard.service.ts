import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, CanActivate, NavigationExtras, Router, RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable()
export class LoginGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }
  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isLoggedIn = this.authService.isLoggedIn();

    if (isLoggedIn) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
