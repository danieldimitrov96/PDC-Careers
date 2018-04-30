import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsResolver } from './admin/admin-core/resolvers/buttons.resolver';
import { ButtonsComponent } from './admin/buttons/buttons.component';
import { ContactsAdminComponent } from './admin/contacts-admin/contacts-admin.component';
import {
    CreateEditButtonsComponent
} from './admin/create-edit-buttons/create-edit-buttons.component';
import {
    CreateEditContactsAdminComponent
} from './admin/create-edit-contacts-admin/create-edit-contacts-admin.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CareersComponent } from './careers/careers.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './admin/users/users.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'careers', loadChildren: './careers/careers.module#CareersModule' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  {
    path: 'contacts', children: [
      { path: '', component: ContactsComponent, pathMatch: 'full' },
    ],
  },
  { path: 'admin/buttons', component: ButtonsComponent, pathMatch: 'full', resolve: { buttons: ButtonsResolver } },
  { path: 'admin/buttons/createOrEdit', component: CreateEditButtonsComponent, pathMatch: 'full' },
  { path: 'admin/contacts', component: ContactsAdminComponent, pathMatch: 'full' },
  { path: 'admin/contacts/createOrEdit', component: CreateEditContactsAdminComponent, pathMatch: 'full' },
  { path: 'admin/users', component: UsersComponent, pathMatch: 'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
