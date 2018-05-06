import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, CanActivate, NavigationExtras, Router, RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  private extras: NavigationExtras;

  constructor(private authService: AuthService, private router: Router) { }
  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isAuth = this.authService.isAuth();
    const returnUrl: string = state.url;

    this.extras = {
      queryParams: { returnUrl },
    };

    if (isAuth) {
      return true;
    }
    this.router.navigate(['/auth/login'], this.extras);
    return false;
  }
}
