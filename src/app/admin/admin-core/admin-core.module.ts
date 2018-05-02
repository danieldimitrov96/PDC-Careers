import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ApplicationAdminServiceService } from './admin-application.service';
import { ButtonsService } from './buttons.service';
import { ContactsAdminService } from './contacts-admin.service';
import { DataService } from './data.service';
import { DownloadService } from './download.service';
import { JobsService } from './jobs.service';
import { ButtonsResolver } from './resolvers/buttons.resolver';
import { ContactsAdminResolver } from './resolvers/contacts.resolver';
import { UsersService } from './users.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ButtonsService,
    DataService,
    ButtonsResolver,
    ContactsAdminResolver,
    ContactsAdminService,
    UsersService,
    ApplicationAdminServiceService,
    JobsService,
    DownloadService,
  ],
})
export class AdminCoreModule {}
