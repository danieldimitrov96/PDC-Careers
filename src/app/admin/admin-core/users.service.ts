import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AppConfig } from '../../config/app.config';
import { AllUsersModel } from '../models/Users/AllUsersModel';

@Injectable()
export class UsersService {

  constructor(private httpClient: HttpClient, private appConfig: AppConfig) { }

  public getAllUsers(): Observable<AllUsersModel> {
    return this.httpClient.get<AllUsersModel>(`${this.appConfig.apiUrl}/admin/users`);
  }
}
