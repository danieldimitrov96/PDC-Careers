import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AppConfig } from '../config/app.config';
import { IButton } from '../models/buttons/IButton';

@Injectable()
export class HomeButtonsService {

  constructor(private httpClient: HttpClient,  private appConfig: AppConfig ) {}

  public getAll(): Observable<IButton[]> {
    return this.httpClient.get<IButton[]>(`${this.appConfig.apiUrl}/buttons`);
  }


}
