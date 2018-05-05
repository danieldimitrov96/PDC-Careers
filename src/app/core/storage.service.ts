import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  constructor() {}

  public saveToStorage(rememberMe: boolean, token: string, expiresAt: string): void {
    if (rememberMe) {
      localStorage.setItem('token', token);
      localStorage.setItem('expiresAt', expiresAt);
    } else {
      sessionStorage.setItem('token', token);
      sessionStorage.setItem('expiresAt', expiresAt);
    }
  }

  public getFromStorage(param: string): string {
    if (localStorage[param]) {
      return localStorage.getItem(param);
    }
    return sessionStorage.getItem(param);
  }

  public removeFromStorage(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('expiresAt');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('expiresAt');
  }

}
