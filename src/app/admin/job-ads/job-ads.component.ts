import { Component, OnInit, ViewChild } from '@angular/core';
import { MatFormFieldControl, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { JobsService } from '../admin-core/jobs.service';
import { SingleJobModel } from '../models/Jobs/SingleJobModel';

@Component({
  selector: 'app-job-ads',
  templateUrl: './job-ads.component.html',
  styleUrls: ['./job-ads.component.css'],
})
export class JobAdsComponent implements OnInit {
  public allJobs: SingleJobModel[];
  public displayedColumns = ['id', 'title', 'status', 'createdAt', 'actions'];
  public dataSource = new MatTableDataSource<SingleJobModel>();

  @ViewChild(MatSort) public sort: MatSort;
  @ViewChild(MatPaginator) public paginator: MatPaginator;

  constructor(private jobsService: JobsService) { }

  public ngOnInit(): void {
    this.jobsService.getAllJobAds().subscribe(
      (data) => {
        this.allJobs = data;
        this.dataSource = new MatTableDataSource(this.allJobs);

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

  public onEdit(action: any): void {
    console.log(action);
  }

  public onDelete(actionId: any): void {
    console.log(actionId);
  }
}
