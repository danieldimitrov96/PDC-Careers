import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Observable } from 'rxjs/Rx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { AuthModule } from './auth/auth.module';
import { CareersComponent } from './careers/careers.component';
import { AppConfig } from './config/app.config';
import { ContactsComponent } from './contacts/contacts.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';

/* tslint:disable */
export function tokenGetter (){
  return localStorage.getItem('token');
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CareersComponent,
    ContactsComponent,
  ],
  imports: [
    CoreModule,
    BrowserModule,
    NgbModule.forRoot(),
    SharedModule,
    RouterModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:3001'],
        blacklistedRoutes: [],
      },
    }),
  ],
  providers: [AppConfig],
  bootstrap: [AppComponent],
})
export class AppModule { }
