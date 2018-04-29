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

  public createContact(data: IContactAdmin): Observable < IContactAdmin > {
    return this.httpClient.post < IContactAdmin > (`${this.appConfig.apiUrl}/admin/contacts`, data);
  }

  public editContact(data: IContactAdmin, id: string): Observable < IContactAdmin > {
    return this.httpClient.post<IContactAdmin>(`${this.appConfig.apiUrl}/admin/contacts/${id}`, data);
  }

  public removeContact( id: string): Observable < IContactAdmin > {
    return this.httpClient.post<IContactAdmin>(`${this.appConfig.apiUrl}/admin/contacts/remove/${id}`, id);
  }

}
