import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

import { AuthService } from '../../core/auth.service';
import { DataService } from '../../core/data.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  public userEmail: string;
  constructor(public authService: AuthService, private data: DataService) {}

  public ngOnInit(): void {
    this.data.currentData.subscribe((email) => this.userEmail = email);
  }

  public onLogout(): void {
    this.authService.logout();
  }

}
