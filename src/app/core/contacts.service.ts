import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { AppConfig } from '../config/app.config';
import { IContacts } from '../models/contacts/IContacts';

@Injectable()
export class ContactsService {

  constructor(private httpClient: HttpClient,  private appConfig: AppConfig ) {}

  public getAll(): Observable<IContacts> {
    return this.httpClient.get<IContacts>(`${this.appConfig.apiUrl}/contacts`);
  }

}
