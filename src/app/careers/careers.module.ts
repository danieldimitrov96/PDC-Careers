import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatButtonModule, MatCardModule, MatDatepickerModule, MatDialogModule, MatExpansionModule,
    MatFormFieldModule, MatInputModule, MatNativeDateModule, MatOptionModule, MatPaginatorModule,
    MatSelectModule,
} from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from '../shared/shared.module';
import { CareersComponent } from './careers.component';
import { CareersRoutingModule } from './careers.routing.module';
import { JobComponent } from './job/job.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CareersRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    NgbModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatExpansionModule,
    MatInputModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatDialogModule,
    MatButtonModule,
  ],
  declarations: [
    CareersComponent,
    JobComponent,
  ],
  exports: [
    CareersComponent,
    JobComponent,
  ],
})
export class CareersModule { }
