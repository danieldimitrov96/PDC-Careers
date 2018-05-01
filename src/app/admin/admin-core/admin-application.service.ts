import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AppConfig } from '../../config/app.config';
import { AuthService } from '../../core/auth.service';
import { IApplication } from '../models/IAplication/IApplication';

@Injectable()
export class ApplicationAdminServiceService {

  constructor(
    private authService: AuthService,
    private httpClient: HttpClient,
    private appConfig: AppConfig) {}

  public getApplicationWithJobId(id: string): Observable < IApplication[] > {
    return this.httpClient.get < IApplication[] > (`${this.appConfig.apiUrl}/admin/jobApplications/${id}`);
  }
}
