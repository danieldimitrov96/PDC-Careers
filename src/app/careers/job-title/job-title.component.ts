import { Component, Input, OnInit } from '@angular/core';
import { JobModel } from '../../models/careers/JobModel';

@Component({
  selector: 'app-job-title',
  templateUrl: './job-title.component.html',
  styleUrls: ['./job-title.component.css'],
})
export class JobTitleComponent implements OnInit {

  @Input()
  public job: JobModel;

  /* tslint:disable */
  constructor() {}

  public ngOnInit() {}

}
