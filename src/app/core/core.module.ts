import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { ContactsService } from './contacts.service';
import { HomeButtonsService } from './home-buttons.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    AuthService,
    ContactsService,
    HomeButtonsService,
    ],
})
export class CoreModule { }
