import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatDialogModule, MatInputModule, MatPaginatorModule, MatSortModule,
} from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { AdminCoreModule } from './admin-core/admin-core.module';
import {
    AppliedUsersForAJobComponent,
} from './applied-users-for-a-job/applied-users-for-a-job.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ContactsAdminComponent } from './contacts-admin/contacts-admin.component';
import { CreateEditButtonsComponent } from './create-edit-buttons/create-edit-buttons.component';
import {
    CreateEditContactsAdminComponent,
} from './create-edit-contacts-admin/create-edit-contacts-admin.component';
import { DialogComponent } from './dialog/dialog.component';
import { CreateEditJobComponent } from './job-ads/create-edit-job/create-edit-job.component';
import { JobAdsComponent } from './job-ads/job-ads.component';
import { AdminRoutingModule } from './routes/admin.routing.module';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    ButtonsComponent,
    DialogComponent,
    CreateEditButtonsComponent,
    ContactsAdminComponent,
    CreateEditContactsAdminComponent,
    UsersComponent,
    AppliedUsersForAJobComponent,
    JobAdsComponent,
    CreateEditJobComponent,
  ],
  imports: [
    AdminRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    AdminCoreModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSortModule,
    MatDialogModule,
    MatInputModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
  ],
  entryComponents: [
    DialogComponent,
  ],
  exports: [
    ButtonsComponent,
    DialogComponent,
    CreateEditButtonsComponent,
    ContactsAdminComponent,
    CreateEditContactsAdminComponent,
    UsersComponent,
    AppliedUsersForAJobComponent,
    JobAdsComponent,
    CreateEditJobComponent,
  ],
})
export class AdminModule { }
