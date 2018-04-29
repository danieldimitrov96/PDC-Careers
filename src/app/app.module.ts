import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ToastrModule } from 'ngx-toastr';
import { Observable } from 'rxjs/Rx';

import { AdminModule } from './admin/admin.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
// import { AuthModule } from './auth/auth.module';
// import { CareersModule } from './careers/careers.module';
import { AppConfig } from './config/app.config';
import { ContactsComponent } from './contacts/contacts.component';
import { SafePipe } from './contacts/googleMapsUrl.pipe';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';

/* tslint:disable */
export function tokenGetter() {
  return localStorage.getItem('token');
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent,
    SafePipe,
  ],
  imports: [
    AdminModule,
    CoreModule,
    BrowserAnimationsModule,
    BrowserModule,
    NgbModule.forRoot(),
    SharedModule,
    RouterModule,
    AppRoutingModule,
    // AuthModule,
    // CareersModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:3001'],
        blacklistedRoutes: [],
      },
    }),
    ToastrModule.forRoot(
      {
        timeOut: 2000,
        positionClass: 'toast-top-center',
        preventDuplicates: true,
      }),
  ],
providers: [AppConfig],
  bootstrap: [AppComponent],
})
export class AppModule { }
