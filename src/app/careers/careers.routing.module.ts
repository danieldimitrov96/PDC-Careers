import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareersComponent } from './careers.component';
import { JobComponent } from './job/job.component';

const routes: Routes = [
  { path: '', component: CareersComponent },
  { path: ':id', component: JobComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CareersRoutingModule { }
