import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { UsersService } from '../admin-core/users.service';
import { AllUsersModel } from '../models/Users/AllUsersModel';
import { SingleUserModel } from '../models/Users/SingleUserModel';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  public allUsers: AllUsersModel;
  public allUsersSorted: AllUsersModel;
  public displayedColumns = ['ID', 'Email', 'Jobs Applied', 'Registered At'];
  public dataSource: MatTableDataSource<SingleUserModel>;

  @ViewChild(MatSort) public sort: MatSort;
  @ViewChild(MatPaginator) public paginator: MatPaginator;

  constructor(private usersService: UsersService) { }

  public ngOnInit(): void {
    this.usersService.getAllUsers().subscribe(
      (data) => {
        this.allUsers = data;
        console.log(this.allUsers);
        this.dataSource = new MatTableDataSource(this.allUsers);
        this.dataSource.paginator = this.paginator;
      });
  }

  public ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
