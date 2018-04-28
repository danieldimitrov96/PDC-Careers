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
  constructor(public authService: AuthService) {}

  public ngOnInit(): void {
    this.userEmail = this.authService.getUserInfo();
  }

  public ngDoCheck(): void {
    this.userEmail = this.authService.getUserInfo();
  }

  public onLogout(): void {
    this.authService.logout();
    this.userEmail = null;
  }

  public isAuth(): boolean {
    return !!this.userEmail;
  }
}
