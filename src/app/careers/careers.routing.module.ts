import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService as AuthGuard } from '../core/auth-guard/auth-guard.service';
import { CareersComponent } from './careers.component';
import { JobApplyComponent } from './job-apply/job-apply.component';
import { JobComponent } from './job/job.component';

const routes: Routes = [
  { path: '', component: CareersComponent },
  { path: ':id', children: [
    {path: '', component: JobComponent, pathMatch: 'full'},
    {path: 'apply', component: JobApplyComponent, canActivate: [AuthGuard]},
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CareersRoutingModule { }
