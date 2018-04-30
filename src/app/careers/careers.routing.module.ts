import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareersComponent } from './careers.component';
import { JobApplyComponent } from './job-apply/job-apply.component';
import { JobComponent } from './job/job.component';

const routes: Routes = [
  { path: '', component: CareersComponent },
  { path: ':id', children: [
    {path: '', component: JobComponent, pathMatch: 'full'},
    {path: 'apply', component: JobApplyComponent},
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CareersRoutingModule { }
