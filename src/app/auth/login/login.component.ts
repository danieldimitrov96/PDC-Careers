import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../core/auth.service';
import { LoginUser } from '../../models/user/login-user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public loginForm: LoginUser;

  constructor(private auth: AuthService) {}

  public onLogin(form: NgForm): void {
    this.loginForm = form.value;
    this.auth.login(this.loginForm).subscribe((x: HttpResponse<{token: string}>) => {
      console.log(x);
      // localStorage.setItem('access_token', x.token);
    });
    console.log(this.loginForm.email);
    console.log(this.loginForm.password);
  }
}
