import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { EmailValidator, FormsModule, NgForm } from '@angular/forms';
import { AppConfig } from '../../config/app.config';
import { AuthService } from '../../core/auth.service';
import { User } from '../../models/user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public loginForm: User;
  @Input() public loginError: string;
  public error: boolean;
  // public isEmail: EmailValidator;
  constructor(private authService: AuthService, private appConfig: AppConfig) {}

  public login(form: NgForm, route: string): void {
    this.loginForm = form.value;
    this.error = this.setError(this.loginForm);
    console.log(this.error);
    this.authService.loginOrSignup(this.loginForm, route).subscribe((res) => {
      /* tslint:disbale */
        if (res.message) {
          this.loginError = 'Invalid user or password';
        } else {
          console.log('Success');
          console.log(res);
          // this.loginError = false;
        }
    });
  }

  private setError(formInputs: User): boolean {
    const isEmail = formInputs.email.match(this.appConfig.mailValidator);
    const password = formInputs.password;
    const confirmPassword = formInputs.confirmPaswword;
    if (!isEmail) {
      this.loginError = 'Invalid email';
      return true;
    } else if (password !== confirmPassword) {
      this.loginError = 'Passwords do not match';
      return true;
    }
    return false;
  }
}
