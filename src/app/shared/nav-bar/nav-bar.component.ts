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
  public isCollapsed: boolean;

  constructor(public authService: AuthService) {
    this.isCollapsed = true;
  }

  public ngOnInit(): void {
    this.userEmail = this.authService.getUserInfoBy('email');
  }

  public ngDoCheck(): void {
    this.userEmail = this.authService.getUserInfoBy('email');
  }

  public onLogout(): void {
    this.authService.logout();
    this.userEmail = null;
  }

  public isAuth(): boolean {
    return !!this.userEmail;
  }
}
