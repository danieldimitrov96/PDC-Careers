import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AdminCoreModule } from './admin-core/admin-core.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { ContactsAdminComponent } from './contacts-admin/contacts-admin.component';
import { CreateEditButtonsComponent } from './create-edit-buttons/create-edit-buttons.component';
import {
    CreateEditContactsAdminComponent,
} from './create-edit-contacts-admin/create-edit-contacts-admin.component';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    ButtonsComponent,
    DialogComponent,
    CreateEditButtonsComponent,
    ContactsAdminComponent,
    CreateEditContactsAdminComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    AdminCoreModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSortModule,
    MatDialogModule,
  ],
  entryComponents: [
    DialogComponent,
  ],
})
export class AdminModule { }
