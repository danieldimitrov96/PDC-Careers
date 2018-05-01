import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AppConfig } from '../../config/app.config';
import { JobCategoryModel } from '../models/Jobs/JobCategoryModel';
import { SingleJobModel } from '../models/Jobs/SingleJobModel';

@Injectable()
export class JobsService {

  constructor(private httpClient: HttpClient, private appConfig: AppConfig) { }

  public getAllJobAds(): Observable<SingleJobModel[]> {
    return this.httpClient.get<SingleJobModel[]>(`${this.appConfig.apiUrl}/admin/jobs`);
  }

  public getCurrentJob(id: string): Observable<SingleJobModel> {
    return this.httpClient.get<SingleJobModel>(`${this.appConfig.apiUrl}/admin/jobs/${id}`);
  }

  public getAllCategories(): Observable<JobCategoryModel[]> {
    return this.httpClient.get<JobCategoryModel[]>(`${this.appConfig.apiUrl}/admin/categories`);
  }
}
