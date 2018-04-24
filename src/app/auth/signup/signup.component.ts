import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../../core/auth.service';
import { DataService } from '../../core/data.service';
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

  constructor(private authService: AuthService, private toastr: ToastrService, private data: DataService) { }

  public ngOnInit(): void {
    this.data.currentData.subscribe((email) => this.userEmail = email);
  }

  public onSignUp(form: NgForm, route: string): void {
    this.signUpForm = form.value;
    this.userEmail = this.signUpForm.email;
    this.authService.loginOrSignup(this.signUpForm, route).subscribe(
      (res) => {
        this.toastr.success(`${this.signUpForm.email} registered successfully!`);
        this.data.changeData(this.userEmail);
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
