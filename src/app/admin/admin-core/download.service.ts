import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AppConfig } from '../../config/app.config';

@Injectable()
export class DownloadService {

  constructor(private httpClient: HttpClient, private appConfig: AppConfig) {}

  public getFile(file: string): Observable < object > {
    return this.httpClient.get(`${this.appConfig.apiUrl}/admin/download/${file}`, {
      responseType: 'blob',
      observe: 'response',
    });
  }
}
