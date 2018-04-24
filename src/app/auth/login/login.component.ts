import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../../core/auth.service';
import { DataService } from '../../core/data.service';
import { User } from '../../models/user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  public loginForm: User;
  public userEmail: string;
  private unautorizedStatus: number = 401;

  constructor(private authService: AuthService, private toastr: ToastrService, private data: DataService) { }

  public ngOnInit(): void {
    this.data.currentData.subscribe((email) => this.userEmail = email);
  }

  public login(form: NgForm, route: string): void {
    this.loginForm = form.value;
    this.userEmail = this.loginForm.email;
    this.authService.loginOrSignup(this.loginForm, route).subscribe(
      (res) => {
        this.toastr.success(`Welcome, ${this.loginForm.email}`);
        this.data.changeData(this.userEmail);
      },
      (err: HttpErrorResponse) => {
        if (err.status === this.unautorizedStatus) {
          this.toastr.error('Invalid email or password!');
        }
      });
  }
}
