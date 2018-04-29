import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { AppConfig } from '../../config/app.config';
import { ContactsAdminService } from '../admin-core/contacts-admin.service';
import { DataService } from '../admin-core/data.service';
import { ContactAdmin } from '../models/Contacts/ContactsAdmin';
import { IContactAdmin } from '../models/IContactsAdmin/IContactsAdmin';

@Component({
  selector: 'app-create-edit-contacts-admin',
  templateUrl: './create-edit-contacts-admin.component.html',
  styleUrls: ['./create-edit-contacts-admin.component.css']
})
export class CreateEditContactsAdminComponent implements OnInit {

  public editObj: IContactAdmin;
  private duplicatedStatus: number = 302;
  private templateRowObject = new ContactAdmin();

  constructor(private httpClient: HttpClient,
              private appConfig: AppConfig,
              private contactService: ContactsAdminService,
              private router: Router,
              private data: DataService,
              private toastr: ToastrService) {}

  public ngOnInit(): void {
    this.data.contactsDataEditObject.subscribe((obj) => this.editObj = obj);
  }
  public ngOnDestroy(): void {
    this.data.changeContactsDataEditObject(this.templateRowObject);
  }
  public onSubmit(form: NgForm): void {
    // // TODO HANDLE ERROR TOASTR
    // if (!form.value.hidden) {
    //   form.value.hidden = false;
    // }
    // if (this.editObj._id) {
    //   form.value._id = this.editObj._id;

    //   this.contactService.editButton(form.value, form.value._id).subscribe(
    //     (res) => {
    //       this.toastr.success('Edited button', 'Success!');
    //       this.router.navigate(['admin', 'buttons']);
    //     },
    //     (err: HttpErrorResponse) => {
    //       if (err.status === this.duplicatedStatus && form.value.name) {
    //         this.toastr.error('Check your internet Conn', 'Error');
    //       }
    //     });
    // } else {
    //   this.contactService.createButton(form.value).subscribe(
    //     (res) => {
    //       this.toastr.success('Added button', 'Success!');
    //       this.router.navigate(['admin', 'buttons']);
    //     },
    //     (err: HttpErrorResponse) => {
    //       if (err.status === this.duplicatedStatus && form.value.name) {
    //         this.toastr.error('Name is already used', 'Error');
    //       }
    //     });
    // }
  }

}
