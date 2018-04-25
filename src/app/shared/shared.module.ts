import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdAccordionStatic } from './careers-accordion/careers-accordion.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    NavBarComponent,
    FooterComponent,
    NgbdAccordionStatic],
  exports: [
    NavBarComponent,
    FooterComponent,
    NgbdAccordionStatic,
    ],
})
export class SharedModule { }
