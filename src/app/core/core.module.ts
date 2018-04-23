import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthGuardService } from './auth-guard/auth-guard.service';
import { AuthService } from './auth.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [AuthService, AuthGuardService],
})
export class CoreModule { }
