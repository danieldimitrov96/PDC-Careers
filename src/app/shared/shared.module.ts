import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    NavBarComponent,
    FooterComponent],
  exports: [
    NavBarComponent,
    FooterComponent,
    ],
})
export class SharedModule { }
