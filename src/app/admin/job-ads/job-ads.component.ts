import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
    MatDialog, MatFormFieldControl, MatPaginator, MatSort, MatTableDataSource,
} from '@angular/material';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { JobsService } from '../admin-core/jobs.service';
import { DialogComponent } from '../dialog/dialog.component';
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
  private forbiddenStatus = 403;

  constructor(private jobsService: JobsService, private router: Router,
              private dialog: MatDialog,
              private toastr: ToastrService) { }

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
  public onCreate(): void {
    this.router.navigate(['/admin/jobs/createedit']);
  }
  public onEdit(jobId: string): void {
    this.router.navigate(['/admin/jobs/createedit', jobId]);
  }

  public onDelete(jobId: string): void {
    const dialogWindow = this.dialog.open(DialogComponent, {
      height: '170px',
    });

    dialogWindow.afterClosed().subscribe((answer) => {
      if (answer) {
        this.jobsService.deleteJob(jobId).subscribe(
          (res) => {
            this.toastr.success('Job deleted!', 'Success');
            this.dataSource.data = this.dataSource.data.filter((x) => x.id !== jobId);
          },
          (err: HttpErrorResponse) => {
            if (err.status === this.forbiddenStatus) {
              this.toastr.error('Not authorized!', 'Error');
            }
          });
      }
    });
  }
}
