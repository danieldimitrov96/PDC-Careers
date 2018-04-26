import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppConfig } from '../../config/app.config';
import { ButtonsService } from '../admin-core/buttons.service';

@Component({
  selector: 'app-create-edit-buttons',
  templateUrl: './create-edit-buttons.component.html',
  styleUrls: ['./create-edit-buttons.component.css'],
})
export class CreateEditButtonsComponent implements OnInit {
@ViewChild('f') public myForm: NgForm;

constructor( private httpClient: HttpClient,
             private appConfig: AppConfig,
             private buttonsService: ButtonsService,
             private router: Router) { }

ngOnInit() {
  this.buttonsService.mySubject.subscribe((data) => {
    console.log(data);
  });
  
  

public onSubmit(form: NgForm): void{

    // TODO HANDLE ERROR TOASTR
    if (!form.value.hidden) {
      form.value.hidden = false;
    }

    this.buttonsService.createButton(form.value).subscribe(
  (res) => { this.router.navigate(['admin', 'buttons']);
},
  (err) => {
  console.log('Handle error');
});

    console.log(form.value);

  }

}
