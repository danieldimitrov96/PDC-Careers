import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Rx';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

import { AuthModule } from './auth/auth.module';
import { CareersComponent } from './careers/careers.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CareersComponent,
    ContactsComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    SharedModule,
    RouterModule,
    AppRoutingModule,
    AuthModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
