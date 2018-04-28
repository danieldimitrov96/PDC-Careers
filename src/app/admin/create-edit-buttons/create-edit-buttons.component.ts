import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { AppConfig } from '../../config/app.config';
import { ButtonsService } from '../admin-core/buttons.service';
import { DataService } from '../admin-core/data.service';
import { ButtonAdmin } from '../models/ButtonAdmin/ButtonAdmin';
import { IButtonAdmin } from '../models/IButtonAdmin/IButtonAdmin';

@Component({
  selector: 'app-create-edit-buttons',
  templateUrl: './create-edit-buttons.component.html',
  styleUrls: ['./create-edit-buttons.component.css'],
})
export class CreateEditButtonsComponent implements OnInit, OnDestroy {

  public editObj: IButtonAdmin;
  private duplicatedStatus: number = 302;
  private templateRowObject = new ButtonAdmin();

  constructor(private httpClient: HttpClient,
    private appConfig: AppConfig,
    private buttonsService: ButtonsService,
    private router: Router,
    private data: DataService,
    private toastr: ToastrService) {}

  public ngOnInit(): void {
    this.data.currentEditObject.subscribe((obj) => this.editObj = obj);
  }
  public ngOnDestroy(): void {
    this.data.changeDataEditObject(this.templateRowObject);
  }
  public onSubmit(form: NgForm): void {
    // TODO HANDLE ERROR TOASTR
    if (!form.value.hidden) {
      form.value.hidden = false;
    }
    if (this.editObj._id) {
      form.value._id = this.editObj._id;

      this.buttonsService.editButton(form.value, form.value._id).subscribe(
        (res) => {
          this.toastr.success('Edited button', 'Success!');
          this.router.navigate(['admin', 'buttons']);
        },
        (err: HttpErrorResponse) => {
          if (err.status === this.duplicatedStatus && form.value.name) {
            this.toastr.error('Check your internet Conn', 'Error');
          }
        });
    } else {
      this.buttonsService.createButton(form.value).subscribe(
        (res) => {
          this.toastr.success('Added button', 'Success!');
          this.router.navigate(['admin', 'buttons']);
        },
        (err: HttpErrorResponse) => {
          if (err.status === this.duplicatedStatus && form.value.name) {
            this.toastr.error('Name is already used', 'Error');
          }
        });
    }
  }

}
