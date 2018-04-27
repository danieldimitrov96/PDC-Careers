import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AppConfig } from '../../config/app.config';
import { IButtonAdmin } from '../models/IButtonAdmin/IButtonAdmin';

@Injectable()
export class ButtonsService {

  constructor(private httpClient: HttpClient, private appConfig: AppConfig) {}

  public getAll(): Observable < IButtonAdmin[] > {
    return this.httpClient.get < IButtonAdmin[] > (`${this.appConfig.apiUrl}/admin/buttons`);
  }

  public createButton(data: IButtonAdmin): Observable < IButtonAdmin > {
    return this.httpClient.post < IButtonAdmin > (`${this.appConfig.apiUrl}/admin/buttons`, data);
  }

  public editButton(data: IButtonAdmin, id: string): Observable < IButtonAdmin > {
    return this.httpClient.post<IButtonAdmin>(`${this.appConfig.apiUrl}/admin/buttons/${id}`, data);
  }
}
