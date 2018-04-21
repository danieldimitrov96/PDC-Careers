import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public onLogin(form: NgForm): void {
    const email = form.value.email;
    const password = form.value.password;
    console.log(email);
    console.log(password);
  }
}
