import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonsService } from './buttons.service';
import { DataService } from './data.service';
import { ButtonsResolver } from './resolvers/buttons.resolver';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [ButtonsService, DataService, ButtonsResolver],
})
export class AdminCoreModule { }
