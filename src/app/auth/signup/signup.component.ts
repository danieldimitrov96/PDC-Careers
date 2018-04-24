import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../core/auth.service';
import { User } from '../../models/user/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})

export class SignupComponent {
  public form: User;

  constructor(private authService: AuthService) { }

  public onSignUp(form: NgForm, route: string): void {
    this.form = form.value;
    this.authService.loginOrSignup(this.form, route).subscribe(
      (res) => {
        /* tslint:disbale */

        console.log('Success');
        console.log(res);

      }, (err: HttpErrorResponse) => {
        if(err.status === 302){
          console.log('User')
        }
      });
  }

  public passwordsMatch(form: NgForm): boolean {
    if (form.value.password !== form.value.confirmPass) {
      /* tslint:disable */
      form.controls['confirmPass'].setErrors({incorrect: true});
      return true;
    }
    return false;
  }
}
