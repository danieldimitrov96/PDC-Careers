import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatFormFieldControl, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { UsersService } from '../admin-core/users.service';
import { SingleUserModel } from '../models/Users/SingleUserModel';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  public allUsers: SingleUserModel[];
  public allUsersSorted: SingleUserModel[];
  public displayedColumns = ['id', 'email', 'totalApplications', 'createdAt'];
  public dataSource = new MatTableDataSource<SingleUserModel>();

  @ViewChild(MatSort) public sort: MatSort;
  @ViewChild(MatPaginator) public paginator: MatPaginator;

  constructor(private usersService: UsersService) { }

  public ngOnInit(): void {
    this.usersService.getAllUsers().subscribe(
      (data) => {
        this.allUsers = data;
        this.dataSource = new MatTableDataSource(this.allUsers);

        setTimeout(() => {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
      });
  }
  public applyFilter(filterValue: string): void {
    const filter = filterValue.trim().toLowerCase();
    this.dataSource.filter = filter;
  }
}
