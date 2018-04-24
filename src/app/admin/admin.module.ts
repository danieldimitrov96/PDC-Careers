import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminCoreModule } from './admin-core/admin-core.module';
import { ButtonsComponent } from './buttons/buttons.component';

@NgModule({
  declarations: [
    ButtonsComponent,
  ],
  imports: [
    CommonModule,
    AdminCoreModule,
  ],
})
export class AdminModule { }
