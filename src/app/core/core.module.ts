import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { ContactsService } from './contacts.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [AuthService, ContactsService],
})
export class CoreModule { }
