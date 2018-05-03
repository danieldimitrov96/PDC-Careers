import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthGuardService } from './auth-guard/auth-guard.service';
import { RoleGuardService } from './auth-guard/role-guard.service';
import { AuthService } from './auth.service';
import { CareersService } from './careers.service';
import { ContactsService } from './contacts.service';
import { HomeButtonsService } from './home-buttons.service';

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
    ],
})
export class CoreModule { }
