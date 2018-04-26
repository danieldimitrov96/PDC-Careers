import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AppConfig } from '../config/app.config';
import { CareersModel } from '../models/careers/CareersModel';
import { JobModel } from '../models/careers/JobModel';
import { AuthService } from './auth.service';

@Injectable()
export class CareersService {

  public allJobs: CareersModel[];

  constructor(private authService: AuthService, private httpClient: HttpClient, private appConfig: AppConfig, private router: Router) { }

  public getOpenPositionsAndCategories(): Observable<CareersModel> {
    return this.httpClient.get<CareersModel>(`${this.appConfig.apiUrl}/careers`);
  }

  public getCurrentJob(id: string): Observable<JobModel> {
    return this.httpClient.get<JobModel>(`${this.appConfig.apiUrl}/careers/${id}`);
  }

}
