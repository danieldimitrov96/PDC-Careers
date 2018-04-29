import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AppConfig } from '../../config/app.config';
import { IContactAdmin } from '../models/IContactsAdmin/IContactsAdmin';

@Injectable()
export class ContactsAdminService {
  constructor(private httpClient: HttpClient, private appConfig: AppConfig) {}

  public getAll(): Observable < IContactAdmin[] > {
    return this.httpClient.get < IContactAdmin[] > (`${this.appConfig.apiUrl}/admin/contacts`);
  }

  // public createButton(data: IContact): Observable < IContact > {
  //   return this.httpClient.post < IContact > (`${this.appConfig.apiUrl}/admin/buttons`, data);
  // }

  // public editButton(data: IContact, id: string): Observable < IContact > {
  //   return this.httpClient.post<IContact>(`${this.appConfig.apiUrl}/admin/buttons/${id}`, data);
  // }

  // public removeButton( id: string): Observable < IContact > {
  //   return this.httpClient.post<IContact>(`${this.appConfig.apiUrl}/admin/buttons/remove/${id}`, id);
  // }

}
