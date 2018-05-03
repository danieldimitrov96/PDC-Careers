import { DatePipe } from '@angular/common';
import { Component, Inject, Input, OnInit, Output } from '@angular/core';
import {
    MatCard, MatCardActions, MatCardContent, MatCardTitle, MatDialog,
} from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { CareersService } from '../../core/careers.service';
import { JobModel } from '../../models/careers/JobModel';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css'],
})
export class JobComponent {
  public job: JobModel;
  public id: string;
  public isAdmin: boolean;
  constructor(private careersService: CareersService,
              private activatedRoute: ActivatedRoute,
              private authService: AuthService,
              private router: Router) { }

  public ngOnInit(): void {
    this.isAdmin = this.authService.getUserInfoBy('isAdmin');
    this.activatedRoute.params
      .subscribe((x) => {
        this.id = x.id;
      });
    this.careersService
      .getCurrentJob(this.id)
      .subscribe((data) => {
        this.job = data;
      });
  }

  public onApply(): void {
      this.router.navigate([`/careers/${this.id}/apply`]);
  }

  public onView(): void {
    this.router.navigate([`/admin/jobs/${this.id}`]);
  }

  public ngDoCheck(): void {
    this.isAdmin = this.authService.getUserInfoBy('isAdmin');
  }
}
