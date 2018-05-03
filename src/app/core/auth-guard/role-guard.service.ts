import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable()
export class RoleGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  public canActivate(): boolean {
    if (this.authService.isAdmin()) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}
