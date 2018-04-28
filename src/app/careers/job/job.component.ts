import { DatePipe } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import {
    MatCard, MatCardActions, MatCardContent, MatCardTitle, MatDialog,
} from '@angular/material';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private careersService: CareersService, private activatedRoute: ActivatedRoute) { }

  public ngOnInit(): void {
    this.activatedRoute.params
      .subscribe((x) => {
        this.id = x.id;
      });
    this.careersService
      .getCurrentJob(this.id)
      .subscribe((data) => {
        this.job = data;
        console.log(this.job);
      });
    // console.log(this.id);
  }
}
