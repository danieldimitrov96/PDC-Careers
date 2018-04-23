import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CareersComponent } from './careers/careers.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'careers', children: [
      { path: '', component: CareersComponent, pathMatch: 'full' },
    ]},
  { path: 'contacts', children: [
      { path: '', component: ContactsComponent, pathMatch: 'full' },
    ]},
  { path: 'login', children: [
        { path: '', component: LoginComponent, pathMatch: 'full' },
      ]},
  { path: 'signup', children: [
        { path: '', component: SignupComponent, pathMatch: 'full' },
      ]},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
