import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AppConfig } from '../../config/app.config';
import { AuthService } from '../../core/auth.service';
import { IApplication, IApplicationData } from '../models/IAplication/IApplication';

@Injectable()
export class ApplicationAdminServiceService {

  constructor(
    private authService: AuthService,
    private httpClient: HttpClient,
    private appConfig: AppConfig) {}

  public getApplicationWithJobId(id: string): Observable < IApplicationData > {
    return this.httpClient.get < IApplicationData > (`${this.appConfig.apiUrl}/admin/jobApplications/${id}`);
  }
}
