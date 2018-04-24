import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../core/auth.service';
import { User } from '../../models/user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public loginForm: User;
  public loginError: string;
  public error: boolean;

  constructor(private authService: AuthService) {}

  public login(form: NgForm, route: string): void {
    this.loginForm = form.value;
    // this.error = this.setError(this.loginForm);
    this.authService.loginOrSignup(this.loginForm, route).subscribe((res) => {
        if (res.message) {
          this.loginError = 'Invalid user or password';
        } else {
          console.log('Success');
          console.log(res);
          // this.loginError = false;
        }
    });
  }

  // private setError(formInputs: User): boolean {
  //   const isEmail = formInputs.email.match(this.appConfig.mailValidator);
  //   const password = formInputs.password;
  //   const confirmPassword = formInputs.confirmPaswword;
  //   if (!isEmail) {
  //     this.loginError = 'Invalid email';
  //     return true;
  //   } else if (password !== confirmPassword) {
  //     this.loginError = 'Passwords do not match';
  //     return true;
  //   }
  //   return false;
  // }
}
