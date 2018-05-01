import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { JobsService } from '../../admin-core/jobs.service';
import { JobCategoryModel } from '../../models/Jobs/JobCategoryModel';
import { JobStatus } from '../../models/Jobs/JobStatus.enum';
import { SingleJobModel } from '../../models/Jobs/SingleJobModel';

@Component({
  selector: 'app-create-edit-job',
  templateUrl: './create-edit-job.component.html',
  styleUrls: ['./create-edit-job.component.css'],
})
export class CreateEditJobComponent implements OnInit {
  public form: FormGroup;
  public allCategories: JobCategoryModel[];
  public loading: boolean = false;
  public jobId: string;
  public createJobId: string = 'create';
  public allStatuses = Object.keys(JobStatus);
  public currentJob = new SingleJobModel();
  private minLength = 4;
  private maxTitleLength = 256;
  private maxDescrLength = 16384;
  private foundStatus = 302;
  private errorStatus = 403;

  constructor(private fb: FormBuilder, private jobsService: JobsService,
              private activatedRoute: ActivatedRoute,
              private location: Location,
              private toastr: ToastrService) {
    this.jobId = this.activatedRoute.snapshot.params.id || this.createJobId;
    this.createForm();
  }

  public ngOnInit(): void {
    // tslint:disable-next-line:no-magic-numbers
    this.allStatuses = this.allStatuses.slice(this.allStatuses.length / 2);
    this.jobsService.getCurrentJob(this.jobId).subscribe((data) => {
      this.currentJob = data;
      this.form.get('title').setValue(this.currentJob.title);
      this.form.get('description').setValue(this.currentJob.description);
      this.form.get('category').setValue(this.currentJob.category);
      this.form.get('status').setValue(this.currentJob.status);
    });
    this.jobsService.getAllCategories().subscribe(
      (data) => {
        this.allCategories = data;
      });
  }

  public createForm(): void {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(this.minLength), Validators.maxLength(this.maxTitleLength)]],
      description: ['', [Validators.required, Validators.minLength(this.minLength), Validators.maxLength(this.maxDescrLength)]],
      category: ['', Validators.required],
      status: ['', Validators.required],
    });
  }

  public onSubmit(): void {
    this.loading = true;
    this.jobsService.createEditJob(this.jobId, this.form.value).subscribe(
      (res) => {
          this.toastr.success('Success');
          setTimeout(() => {
            this.location.back();
          // tslint:disable-next-line:no-magic-numbers
          },         2000);
      },
      (err: HttpErrorResponse) => {
        if (err.status === this.foundStatus) {
          this.toastr.error('Job with this title already exists!', 'Duplicates');
        } else if (err.status === this.errorStatus) {
          this.toastr.error('Something went wrong', 'Try Again');
        }
      });
  }

  public onBack(): void {
    this.location.back();
  }

}
