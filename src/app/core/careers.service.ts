import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AppConfig } from '../config/app.config';
import { CareersModel } from '../models/careers/CareersModel';
import { JobApplyModel } from '../models/careers/JobApplyModel';
import { JobModel } from '../models/careers/JobModel';
import { AuthService } from './auth.service';

@Injectable()
export class CareersService {

  private allJobs: JobModel[];
  private allJobsFiltered: JobModel[];

  constructor(private authService: AuthService, private httpClient: HttpClient, private appConfig: AppConfig, private router: Router) { }

  public getOpenPositionsAndCategories(): Observable<CareersModel> {
    return this.httpClient.get<CareersModel>(`${this.appConfig.apiUrl}/careers`);
  }

  public getCurrentJob(id: string): Observable<JobModel> {
    return this.httpClient.get<JobModel>(`${this.appConfig.apiUrl}/careers/${id}`);
  }

  public applyForJob(jobId: string, content: FormData): Observable<JobApplyModel> {
    return this.httpClient.post<JobApplyModel>(`${this.appConfig.apiUrl}/careers/${jobId}`, content);
  }

  public searchJob(
    allJobsFiltered: JobModel[],
    allJobs: JobModel[],
    keyword: string, date?: number, category?: string): JobModel[] {
    this.allJobsFiltered = allJobs.map((x) => {
      x.createdAt = new Date(x.createdAt).setHours(0, 0, 0, 0);
      return x;
    })
      .filter((x) => x.title.toLowerCase().indexOf(keyword.toLowerCase().trim()) >= 0 ||
        x.description.toLocaleLowerCase().indexOf(keyword.toLowerCase().trim()) >= 0);

    if (date) {
      this.allJobsFiltered = this.allJobsFiltered.filter((x) => x.createdAt >= date);
    }
    if (category) {
      this.allJobsFiltered = this.allJobsFiltered.filter((x) => x.category === category);
    }

    return this.allJobsFiltered;
  }

  public filterByCategory(
    allJobsFiltered: JobModel[],
    allJobs: JobModel[],
    category: string,
    keyword?: string, date?: number,
  ): JobModel[] {

    this.allJobsFiltered = allJobs.map((x) => {
      x.createdAt = new Date(x.createdAt).setHours(0, 0, 0, 0);
      return x;
    }).filter((x) => x.category === category);

    if (keyword) {
      this.allJobsFiltered = this.allJobsFiltered.filter((x) => x.title.toLowerCase().indexOf(keyword.toLowerCase().trim()) >= 0 ||
        x.description.toLocaleLowerCase().indexOf(keyword.toLowerCase().trim()) >= 0);
    }
    if (date) {
      this.allJobsFiltered = this.allJobsFiltered.filter((x) => x.createdAt >= date);
    }
    return this.allJobsFiltered;
  }

  public dateChanged(
    allJobsFiltered: JobModel[],
    allJobs: JobModel[],
    date: number, keyword?: string, category?: string): JobModel[] {

    this.allJobsFiltered = allJobs.map((x) => {
      x.createdAt = new Date(x.createdAt).setHours(0, 0, 0, 0);
      return x;
    }).filter((x) => x.createdAt >= date);
    if (keyword) {
      this.allJobsFiltered = this.allJobsFiltered.filter((x) => x.title.toLowerCase().indexOf(keyword.toLowerCase().trim()) >= 0 ||
        x.description.toLocaleLowerCase().indexOf(keyword.toLowerCase().trim()) >= 0);
    }
    if (category) {
      this.allJobsFiltered = this.allJobsFiltered.filter((x) => x.category === category);
    }
    return this.allJobsFiltered;
  }

}
