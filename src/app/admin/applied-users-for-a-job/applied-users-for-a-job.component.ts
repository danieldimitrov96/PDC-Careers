import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { saveAs } from 'file-saver';

import { AuthService } from '../../core/auth.service';
import { CareersService } from '../../core/careers.service';
import { ApplicationAdminServiceService } from '../admin-core/admin-application.service';
import { DownloadService } from '../admin-core/download.service';
import { IApplication, IApplicationData } from '../models/IAplication/IApplication';
import { IAppliedUsers, IJobModelAdmin } from '../models/IJobModelAdmin/IJobModelAdmin';

@Component({
  selector: 'app-applied-users-for-a-job',
  templateUrl: './applied-users-for-a-job.component.html',
  styleUrls: ['./applied-users-for-a-job.component.css'],
})
export class AppliedUsersForAJobComponent implements OnInit {
  // todo get user by id

  public displayedColumns = ['_id', 'fullName', 'comment', 'createdAt', 'download'];
  public dataSource: MatTableDataSource < IApplication > ;

  @ViewChild(MatPaginator) public paginator: MatPaginator;
  @ViewChild(MatSort) public sort: MatSort;

  public job: IJobModelAdmin;
  public jobTitle: string;
  public id: string;
  public usersApplied: IAppliedUsers[] = [];
  public userEmail: string;
  constructor(
    private applicationService: ApplicationAdminServiceService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
    private donwloadService: DownloadService) {}

  public ngOnInit(): void {
    this.activatedRoute.params
      .subscribe((x) => {
        this.id = x.id;
      });
    this.applicationService.getApplicationWithJobId(this.id).subscribe((data: IApplicationData) => {
      this.dataSource = new MatTableDataSource(data.context);
      this.jobTitle = data.title;
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

  public onCvDownload(cv: string): void {
    const splittedCV = cv.split('/');
    const filename = splittedCV[splittedCV.length - 1];
    this.donwloadService.getFile(filename).subscribe((response: HttpResponse<Blob>) => {
      saveAs(response.body, filename);
    });
  }

  public onClDownload(cLetter: string): void {
    const splittedCL = cLetter.split('/');
    const filename = splittedCL[splittedCL.length - 1];
    this.donwloadService.getFile(filename).subscribe((response: HttpResponse<Blob>) => {
      saveAs(response.body, filename);
    });
  }

}
