import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';

import { AppConfig } from '../config/app.config';
import { AuthService } from './auth.service';
import { StorageService } from './storage.service';

describe('AuthService', () => {
  let authService: AuthService;
  let mockStorageService: jasmine.SpyObj<StorageService>;
  let mockHttp: jasmine.SpyObj<HttpClient>;
  let mockAppConfig: jasmine.SpyObj<AppConfig>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockJwT: jasmine.SpyObj<JwtHelperService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('StorageService', ['saveToStorage', 'getFromStorage', 'removeFromStorage']);
    const spyAppConfig = jasmine.createSpyObj('AppConfig', [
      'apiUrl',
    ]);
    const spyHttp = jasmine.createSpyObj('HttpClient', ['get']);
    const spyRouter = jasmine.createSpyObj('Router', ['navigate']);
    const spyJwt = jasmine.createSpyObj('JwtHelperService', ['tokenGetter', 'isTokenExpired', 'decodeToken']);

    function tokenGetter() {
      return localStorage.getItem('token') || sessionStorage.getItem('token');
    }
    TestBed.configureTestingModule({
      imports: [
        JwtModule.forRoot({
          config: {
            tokenGetter,
            whitelistedDomains: ['localhost:3001'],
            blacklistedRoutes: [],
          },
        }),
      ],
      providers: [
        AuthService,
        { provide: JwtHelperService, useValue: spyJwt },
        { provide: Router, useValue: spyRouter },
        { provide: StorageService, useValue: spy },
        { provide: AppConfig, useValue: spyAppConfig },
        { provide: HttpClient, useValue: spyHttp }],
    });
    authService = TestBed.get(AuthService);
    mockStorageService = TestBed.get(StorageService);
    mockHttp = TestBed.get(HttpClient);
    mockAppConfig = TestBed.get(AppConfig);
    mockJwT = TestBed.get(JwtHelperService);
    mockRouter = TestBed.get(Router);
  });

  it('checkEmail method to have been called', () => {
    const result = authService.checkEmail('test');
    expect(mockHttp.get).toHaveBeenCalledTimes(1);
  });

  it('isAuth to return true', () => {
    // Arrange
    mockJwT.tokenGetter.and.returnValue('token');
    mockJwT.isTokenExpired.and.returnValue(false);

    // Act
    const result = authService.isAuth();

    // Assert
    expect(result).toBeTruthy();
  });

  it('isAdmin to return false when user is loggedin', () => {
    // Arrange
    mockJwT.tokenGetter.and.returnValue('token');
    mockJwT.decodeToken.and.returnValue({isAdmin: false});

    // Act
    const result = authService.isAdmin();

    // Act
    expect(result).toBeFalsy();
  });

  it('isAdmin to return true when admin is loggedin', () => {
    // Arrange
    mockJwT.tokenGetter.and.returnValue('token');
    mockJwT.decodeToken.and.returnValue({isAdmin: true});

    // Act
    const result = authService.isAdmin();

    // Act
    expect(result).toBeTruthy();
  });

  it('isLoggedIn to return false when user session is not valid', () => {
    // Arrange
    mockStorageService.getFromStorage.and.returnValue('0');

    // Act
    const result = authService.isLoggedIn();

    // Assert
    expect(result).toBeFalsy();
  });

  it('getUserInfoBy to return string', () => {
    // Arrange
    mockJwT.tokenGetter.and.returnValue('token');
    mockJwT.decodeToken.and.returnValue({email: 'email'});

    // Act
    const result = authService.getUserInfoBy('email');

    expect(result).toBe('email');
  });
});
