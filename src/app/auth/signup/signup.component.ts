import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../../core/auth.service';
import { User } from '../../models/user/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})

export class SignupComponent {
  public signUpForm: User;
  public userEmail: string;
  private foundStatus: number = 302;

  constructor(private authService: AuthService, private toastr: ToastrService, private route: ActivatedRoute) { }

  public onSignUp(form: NgForm, route: string): void {
    this.signUpForm = form.value;
    this.userEmail = this.signUpForm.email;
    const returnUrl = this.route.snapshot.queryParams.returnUrl;
    this.authService.loginOrSignup(this.signUpForm, route, returnUrl).subscribe(
      (res) => {
        this.toastr.success(`${this.signUpForm.email} registered successfully!`);
      },
      (err: HttpErrorResponse) => {
        if (err.status === this.foundStatus) {
          this.toastr.error('User already exists!');
        }
      });
  }

  public passwordsMatch(form: NgForm): boolean {
    if (form.value.password !== form.value.confirmPass) {
      /* tslint:disable */
      form.controls['confirmPass'].setErrors({ incorrect: true });
      return true;
    }
    return false;
  }
}
