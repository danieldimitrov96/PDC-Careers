import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonsService } from './buttons.service';
import { ContactsAdminService } from './contacts-admin.service';
import { DataService } from './data.service';
import { ButtonsResolver } from './resolvers/buttons.resolver';
import { ContactsAdminResolver } from './resolvers/contacts.resolver';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [ButtonsService, DataService, ButtonsResolver, ContactsAdminResolver, ContactsAdminService],
})
export class AdminCoreModule { }
