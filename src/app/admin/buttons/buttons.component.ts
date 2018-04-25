import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ButtonsService } from '../admin-core/buttons.service';
import { IButtonAdmin } from '../models/IButtonAdmin/IButtonAdmin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
})
export class ButtonsComponent {

  public buttons: IButtonAdmin[] = [];
  public displayedColumns = ['_id', 'hidden', 'name', 'type', 'icon', 'link', 'createdAt','actions'];
  public dataSource: MatTableDataSource<IButtonAdmin>;
  @ViewChild(MatPaginator) public paginator: MatPaginator;
  @ViewChild(MatSort) public sort: MatSort;
  constructor(private buttonsService: ButtonsService, private router: Router) {}
  public  ngOnInit(): void {
    this.buttonsService.getAll().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.buttons = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    } );
  }

  public onCreate(): void {
    this.router.navigate(['admin', 'buttons', 'createOrEdit']);
  }

  public onEdit(row): void {
    console.log(row);
    // this.router.navigate(['admin', 'buttons', 'createOrEdit']);
  }
}
