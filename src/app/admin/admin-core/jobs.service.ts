import { HttpClient, HttpResponseBase } from '@angular/common/http';
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

  public createEditJob(id: string, content: FormData): Observable<SingleJobModel> {
    return this.httpClient.post<SingleJobModel>(`${this.appConfig.apiUrl}/admin/jobs/${id}`, content);
  }

  public deleteJob(id: string): Observable<SingleJobModel> {
    return this.httpClient.post<SingleJobModel>(`${this.appConfig.apiUrl}/admin/jobs/remove/${id}`, id);
  }
}
