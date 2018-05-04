import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../../core/auth.service';
import { ILocalStorage } from '../../models/ILocalStorage/ILocalStorage';
import { User } from '../../models/user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  public loginForm: User;
  public localS: ILocalStorage = {
    email: '',
    password: '',
    remember: 'false',
  };
  public rememberMe = false;

  private unautorizedStatus: number = 401;
  constructor(private authService: AuthService, private toastr: ToastrService) {}

  public login(form: NgForm, route: string): void {
    this.loginForm = form.value;
    this.localS = form.value;
    if (!this.localS.remember) {
      this.localS.remember = 'false';
    }
    this.authService.loginOrSignup(this.loginForm, route).subscribe(
      (res) => {
        this.toastr.success(`Welcome, ${this.loginForm.email}`);
        if (this.localS.remember) {
          localStorage.setItem('email', this.localS.email);
          localStorage.setItem('password', this.localS.password);
          localStorage.setItem('rememberMe', this.localS.remember);
          this.rememberMe = true;
        } else {
          this.rememberMe = false;
          localStorage.setItem('rememberMe', this.localS.remember);
        }
      },
      (err: HttpErrorResponse) => {
        if (err.status === this.unautorizedStatus) {
          this.toastr.error('Invalid email or password!');
        }
      });
  }
  public ngOnInit(): void {
    if (localStorage.rememberMe === 'true') {
      this.localS.email = localStorage.email;
      this.localS.password = localStorage.password;
      this.localS.remember = localStorage.remember;
      this.rememberMe = true;
    }
  }
}
