import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

import * as moment from 'moment';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/shareReplay';
import { Observable } from 'rxjs/Observable';

import { AppConfig } from '../config/app.config';
import { User } from '../models/user/user';
import { UserSignupModel } from '../models/user/userSignUpModel';

@Injectable()
export class AuthService {

  constructor(private appConfig: AppConfig, private http: HttpClient, private jwtService: JwtHelperService, private router: Router) { }

  public loginOrSignup(user: User, route: string): Observable<UserSignupModel> {
    return this.http.post<UserSignupModel>(`${this.appConfig.apiUrl}${route}`, user)
      .do((res) => this.setSession(res))
      .shareReplay();
  }

  public isAuth(): boolean {
    const token = this.jwtService.tokenGetter();
    return !!token && !this.jwtService.isTokenExpired(token);
  }

  public isLoggedIn(): boolean {
    return moment().isBefore(this.getExpiration());
  }

  public logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('expiresAt');
    this.router.navigate(['/']);
  }

  public getUserInfoBy(param: string): any {
    const token = this.jwtService.tokenGetter();
    if (token) {
      const decoded = this.jwtService.decodeToken(token);
      return decoded[param];
    }
    return null;
  }

  private setSession(authResponse: UserSignupModel): void {
    const expiresAt = moment().add(authResponse.expiresIn, 'second');
    if (!authResponse.message) {
      localStorage.setItem('token', authResponse.token);
      localStorage.setItem('expiresAt', JSON.stringify(expiresAt.valueOf()));
      this.router.navigate(['']);
    }
  }

  private getExpiration(): moment.MomentInput {
    const expirationTimer = localStorage.getItem('expiresAt');
    const expiresAt = JSON.parse(expirationTimer);
    return moment(expiresAt);
  }
}
