import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AppConfig } from '../config/app.config';
import { ICareers } from '../models/careers/ICareers';
import { AuthService } from './auth.service';

@Injectable()
export class CareersService {

  public allJobs: ICareers[];

  constructor(private authService: AuthService, private httpClient: HttpClient, private appConfig: AppConfig, private router: Router) { }

  public getOpenPositionsAndCategories(): Observable<ICareers> {
    return this.httpClient.get<ICareers>(`${this.appConfig.apiUrl}/careers`);
  }

}
