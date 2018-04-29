import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { ContactsAdminService } from '../admin-core/contacts-admin.service';
import { DataService } from '../admin-core/data.service';
import { DialogComponent } from '../dialog/dialog.component';
import { IContactAdmin } from '../models/IContactsAdmin/IContactsAdmin';

@Component({
  selector: 'app-contacts-admin',
  templateUrl: './contacts-admin.component.html',
  styleUrls: ['./contacts-admin.component.css']
})
export class ContactsAdminComponent {

  public duplicatedStatus = 302;
  public contacts: IContactAdmin[] = [];
  public displayedColumns = ['_id', 'name', 'isPrimary', 'address', 'createdAt', 'actions'];
  public dataSource: MatTableDataSource < IContactAdmin > ;

  @ViewChild(MatPaginator) public paginator: MatPaginator;
  @ViewChild(MatSort) public sort: MatSort;

  private editObj: IContactAdmin;

  constructor(private contactsService: ContactsAdminService,
              private router: Router,
              private data: DataService,
              private routerSnapshot: ActivatedRoute,
              private toastr: ToastrService,
              private dialog: MatDialog) {}

  public onCreate(): void {
    this.router.navigate(['admin', 'contacts', 'createOrEdit']);
  }

  public ngOnInit(): void {
    this.contacts = this.routerSnapshot.snapshot.data['contacts'];
    console.log(this.contacts);
    this.dataSource = new MatTableDataSource(this.contacts);
    this.data.contactsCurrentEditObject.subscribe((obj) => this.editObj = obj);
  }

  public onDelete(id: string): void {

    const dialogRef = this.dialog.open(DialogComponent, {
      height: '170px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.contactsService.removeContact(id).subscribe(
          (res) => {
            this.toastr.success('Edited button', 'Success!');
            this.dataSource.data = this.dataSource.data.filter((x) => x._id !== id);
          },
          (err: HttpErrorResponse) => {
            if (err.status === this.duplicatedStatus) {
              this.toastr.error('Check your internet Conn', 'Error');
            }
          });
      }
    });
  }
  public onEdit(row: IContactAdmin): void {
    this.data.changeContactsDataEditObject(row);
    this.router.navigate(['admin', 'contacts', 'createOrEdit']);
  }
  private ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
