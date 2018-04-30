import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { ButtonsService } from '../admin-core/buttons.service';
import { DataService } from '../admin-core/data.service';
import { IButtonAdmin } from '../models/IButtonAdmin/IButtonAdmin';
import { DialogComponent } from './../dialog/dialog.component';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
})
export class ButtonsComponent {

  public duplicatedStatus = 302;
  public buttons: IButtonAdmin[] = [];
  public displayedColumns = ['_id', 'hidden', 'name', 'type', 'icon', 'link', 'createdAt', 'actions'];
  public dataSource: MatTableDataSource < IButtonAdmin > ;

  @ViewChild(MatPaginator) public paginator: MatPaginator;
  @ViewChild(MatSort) public sort: MatSort;

  private editObj: IButtonAdmin;

  constructor(private buttonsService: ButtonsService,
              private router: Router,
              private data: DataService,
              private routerSnapshot: ActivatedRoute,
              private toastr: ToastrService,
              private dialog: MatDialog) {}

  public ngOnInit(): void {
    this.buttons = this.routerSnapshot.snapshot.data['buttons'];
    this.dataSource = new MatTableDataSource(this.buttons);
    this.data.currentEditObject.subscribe((obj) => this.editObj = obj);
  }

  public onCreate(): void {
    this.router.navigate(['admin', 'buttons', 'createOrEdit']);
  }

  public onDelete(id: string): void {

    const dialogRef = this.dialog.open(DialogComponent, {
      height: '170px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.buttonsService.removeButton(id).subscribe(
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
  public onEdit(row: IButtonAdmin): void {
    this.data.changeDataEditObject(row);
    this.router.navigate(['admin', 'buttons', 'createOrEdit']);
  }

  public applyFilter(filterValue: string): void {
    const filter = filterValue.trim().toLowerCase();
    this.dataSource.filter = filter;
  }

  private ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
