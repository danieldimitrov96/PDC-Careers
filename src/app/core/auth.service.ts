import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AppConfig } from '../config/app.config';

@Injectable()
export class AuthService {

  constructor(private appConfig: AppConfig, private http: HttpClient, private jwtService: JwtHelperService) { }

}
