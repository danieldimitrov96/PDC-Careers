import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonsService } from './buttons.service';
import { DataService } from './data.service';
import { ButtonsResolver } from './resolvers/buttons.resolver';
import { UsersService } from './users.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [ButtonsService, DataService, ButtonsResolver, UsersService],
})
export class AdminCoreModule { }
