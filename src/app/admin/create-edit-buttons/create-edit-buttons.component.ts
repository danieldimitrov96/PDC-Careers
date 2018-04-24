import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-edit-buttons',
  templateUrl: './create-edit-buttons.component.html',
  styleUrls: ['./create-edit-buttons.component.css'],
})
export class CreateEditButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public onSubmit(form: NgForm): void{
    console.log(form.value);

  }

}
