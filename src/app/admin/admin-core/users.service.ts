import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AppConfig } from '../../config/app.config';
import { SingleUserModel } from '../models/Users/SingleUserModel';

@Injectable()
export class UsersService {

  constructor(private httpClient: HttpClient, private appConfig: AppConfig) { }

  public getAllUsers(): Observable<SingleUserModel[]> {
    return this.httpClient.get<SingleUserModel[]>(`${this.appConfig.apiUrl}/admin/users`);
  }
}
