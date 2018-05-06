import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuardService as LoginGuard } from './core/guards/login-guard.service';
import { RoleGuardService as RoleGuard } from './core/guards/role-guard.service';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'careers', loadChildren: './careers/careers.module#CareersModule' },
  { path: 'contacts', loadChildren: './contacts/contacts.module#ContactsModule' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule', canActivate: [LoginGuard] },
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule', canActivate: [RoleGuard]},
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
