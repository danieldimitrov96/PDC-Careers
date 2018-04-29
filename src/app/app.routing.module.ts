import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsComponent } from './admin/buttons/buttons.component';
import { CreateEditButtonsComponent } from './admin/create-edit-buttons/create-edit-buttons.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CareersComponent } from './careers/careers.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';

import { ButtonsResolver } from './admin/admin-core/resolvers/buttons.resolver';

const routes: Routes = [
  { path: 'admin/buttons', component: ButtonsComponent, pathMatch: 'full' , resolve: {buttons: ButtonsResolver}},
  { path: 'admin/buttons/createOrEdit', component: CreateEditButtonsComponent, pathMatch: 'full' },
  { path: '', component: HomeComponent, pathMatch: 'full' },

  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full'},
  {
    path: 'contacts', children: [
      { path: '', component: ContactsComponent, pathMatch: 'full' },
    ],
  },
  { path: 'careers', loadChildren: './careers/careers.module#CareersModule' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
