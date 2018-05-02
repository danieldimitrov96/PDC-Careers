import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  public userEmail: string;
  public isAdmin: boolean;
  public isCollapsed: boolean;

  constructor(public authService: AuthService) {
    this.isCollapsed = true;
  }

  public ngOnInit(): void {
    this.userEmail = this.authService.getUserInfoBy('email');
    this.isAdmin = this.authService.getUserInfoBy('isAdmin');
  }

  public ngDoCheck(): void {
    this.userEmail = this.authService.getUserInfoBy('email');
    this.isAdmin = this.authService.getUserInfoBy('isAdmin');
  }

  public onLogout(): void {
    this.authService.logout();
    this.userEmail = null;
    this.isAdmin = null;
  }

  public isAuth(): boolean {
    return !!this.userEmail;
  }
}
