import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { JwtHelperService } from '@auth0/angular-jwt';

import { Observable } from 'rxjs/Observable';

import { AppConfig } from '../config/app.config';
import { LoginUser } from '../models/user/login-user';

@Injectable()
export class AuthService {

  constructor(private appConfig: AppConfig, private http: HttpClient) { }

  public login(user: LoginUser): Observable<object> {
    return this.http.post<LoginUser>(`${this.appConfig.apiUrl}/login`, user);
  }

}
