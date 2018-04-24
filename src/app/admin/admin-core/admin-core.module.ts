import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonsService } from './buttons.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [ButtonsService],
})
export class AdminCoreModule { }
