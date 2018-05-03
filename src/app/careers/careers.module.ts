import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatButtonModule, MatCardModule, MatDatepickerModule, MatDialogModule, MatExpansionModule,
    MatFormFieldModule, MatInputModule, MatListModule, MatNativeDateModule, MatOptionModule,
    MatPaginatorModule, MatSelectModule,
} from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FroalaViewModule } from 'angular-froala-wysiwyg';

import { SharedModule } from '../shared/shared.module';
import { CareersComponent } from './careers.component';
import { CareersRoutingModule } from './careers.routing.module';
import { JobApplyComponent } from './job-apply/job-apply.component';
import { JobTitleComponent } from './job-title/job-title.component';
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
    MatListModule,
    FroalaViewModule.forRoot(),
  ],
  declarations: [
    CareersComponent,
    JobComponent,
    JobApplyComponent,
    JobTitleComponent,
  ],
  exports: [
    CareersComponent,
    JobComponent,
    JobApplyComponent,
    JobTitleComponent,
  ],
})
export class CareersModule { }
