import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { CareersService } from './careers.service';
import { ContactsService } from './contacts.service';
import { AuthGuardService } from './guards/auth-guard.service';
import { LoginGuardService } from './guards/login-guard.service';
import { RoleGuardService } from './guards/role-guard.service';
import { HomeButtonsService } from './home-buttons.service';
import { StorageService } from './storage.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    AuthService,
    CareersService,
    ContactsService,
    HomeButtonsService,
    AuthGuardService,
    RoleGuardService,
    StorageService,
    LoginGuardService,
    ],
})
export class CoreModule { }
