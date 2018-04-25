import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CareersComponent } from './careers.component';
import { CareersRoutingModule } from './careers.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CareersRoutingModule,
    SharedModule,
  ],
  declarations: [
    CareersComponent,
  ],
  exports: [
    CareersComponent,
  ],
})
export class CareersModule { }
