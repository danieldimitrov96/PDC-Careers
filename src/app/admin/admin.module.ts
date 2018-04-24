import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminCoreModule } from './admin-core/admin-core.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { CreateEditButtonsComponent } from './create-edit-buttons/create-edit-buttons.component';

@NgModule({
  declarations: [
    ButtonsComponent,
    CreateEditButtonsComponent,
  ],
  imports: [
    CommonModule,
    AdminCoreModule,
    FormsModule,
  ],
})
export class AdminModule { }
