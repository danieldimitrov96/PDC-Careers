import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../../core/auth.service';
import { User } from '../../models/user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  public loginForm: User;
  private unautorizedStatus: number = 401;

  constructor(private authService: AuthService, private toastr: ToastrService, private route: ActivatedRoute) { }
  public login(form: NgForm, route: string): void {
    this.loginForm = form.value;
    const returnUrl = this.route.snapshot.queryParams.returnUrl;
    this.authService.loginOrSignup(this.loginForm, route, returnUrl).subscribe(
      (res) => {
        this.toastr.success(`Welcome, ${this.loginForm.email}`);
      },
      (err: HttpErrorResponse) => {
        if (err.status === this.unautorizedStatus) {
          this.toastr.error('Invalid email or password!');
        }
      });
  }
}
