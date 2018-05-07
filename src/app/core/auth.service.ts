import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Params, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

import * as moment from 'moment';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/shareReplay';
import { Observable } from 'rxjs/Observable';

import { AppConfig } from '../config/app.config';
import { User } from '../models/user/user';
import { UserSignupModel } from '../models/user/userSignUpModel';
import { StorageService } from './storage.service';

@Injectable()
export class AuthService {

  constructor(private appConfig: AppConfig,
              private http: HttpClient,
              private jwtService: JwtHelperService,
              private router: Router,
              private storageService: StorageService) { }

  public checkEmail(email: string): Observable<object> {
    return this.http.get(`${this.appConfig.apiUrl}/checkEmail/${email}`);
  }

  public loginOrSignup(user: User, route: string, returnUrl: Params): Observable<UserSignupModel> {
    return this.http.post<UserSignupModel>(`${this.appConfig.apiUrl}${route}`, user)
      .do((res) => this.setSession(res, user.remember, returnUrl))
      .shareReplay();
  }

  public isAuth(): boolean {
    const token = this.jwtService.tokenGetter();
    return !!token && !this.jwtService.isTokenExpired(token);
  }

  public isAdmin(): boolean {
    return this.getUserInfoBy('isAdmin');
  }

  public isLoggedIn(): boolean {
    return moment().isBefore(this.getExpiration());
  }

  public logout(): void {
    this.storageService.removeFromStorage();
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

  private setSession(authResponse: UserSignupModel, remember: boolean, returnUrl: Params): void {
    const expiresAt = moment().add(authResponse.expiresIn, 'second');
    const expiresAtString = JSON.stringify(expiresAt.valueOf());
    if (!authResponse.message) {
      this.storageService.saveToStorage(remember, authResponse.token, expiresAtString);
      if (returnUrl) {
        this.router.navigate([returnUrl]);
      } else {
        this.router.navigate(['']);
      }
    }
  }

  private getExpiration(): moment.MomentInput {
    const expirationTimer = this.storageService.getFromStorage('expiresAt');
    const expiresAt = JSON.parse(expirationTimer);
    return moment(expiresAt);
  }
}
