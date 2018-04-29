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
import { DialogComponent } from './buttons/dialog/dialog.component';
import { CreateEditButtonsComponent } from './create-edit-buttons/create-edit-buttons.component';

@NgModule({
  declarations: [
    ButtonsComponent,
    DialogComponent,
    CreateEditButtonsComponent,
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
