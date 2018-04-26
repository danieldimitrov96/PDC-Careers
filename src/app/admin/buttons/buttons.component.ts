import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ButtonsService } from '../admin-core/buttons.service';
import { DataService } from '../admin-core/data.service';
import { IButtonAdmin } from '../models/IButtonAdmin/IButtonAdmin';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
})
export class ButtonsComponent {

  public buttons: IButtonAdmin[] = [];
  public displayedColumns = ['_id', 'hidden', 'name', 'type', 'icon', 'link', 'createdAt', 'actions'];
  public dataSource: MatTableDataSource < IButtonAdmin > ;

  @ViewChild(MatPaginator) public paginator: MatPaginator;
  @ViewChild(MatSort) public sort: MatSort;

  private editObj: IButtonAdmin;

  constructor(private buttonsService: ButtonsService,
              private router: Router,
              private data: DataService,
              private routerSnapshot: ActivatedRoute) {
  }

  public ngOnInit(): void {
    this.buttons = this.routerSnapshot.snapshot.data['buttons'];
    this.dataSource = new MatTableDataSource(this.buttons);
    this.data.currentEditObject.subscribe((obj) => this.editObj = obj);
  }

  public onCreate(): void {
    this.router.navigate(['admin', 'buttons', 'createOrEdit']);
  }

  public onEdit(row: IButtonAdmin): void {
    this.data.changeDataEditObject(row);
    this.router.navigate(['admin', 'buttons', 'createOrEdit']);
  }
  private ngAfterViewInit(): void {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  }
}
