import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  public createJobId: string = '1';
  public allStatuses = Object.keys(JobStatus);
  public currentJob = new SingleJobModel();
  private minLength = 4;
  private maxTitleLength = 256;
  private maxDescrLength = 16384;

  constructor(private fb: FormBuilder, private jobsService: JobsService, private activatedRoute: ActivatedRoute) {
    this.jobId = this.activatedRoute.snapshot.params.id || this.createJobId;
    this.createForm();
  }

  public ngOnInit(): void {
    // tslint:disable-next-line:no-magic-numbers
    this.allStatuses = this.allStatuses.slice(this.allStatuses.length / 2);
    this.jobsService.getCurrentJob(this.jobId).subscribe((data) => {
      this.currentJob = data;
      this.form.get('jobTitle').setValue(this.currentJob.title);
      this.form.get('jobDescription').setValue(this.currentJob.description);
      this.form.get('jobCategory').setValue(this.currentJob.category);
      this.form.get('jobStatus').setValue(this.currentJob.status);
      // console.log(this.currentJob);
    });
    this.jobsService.getAllCategories().subscribe(
      (data) => {
        this.allCategories = data;
      });
    console.log(this.form);
    console.log(this.allStatuses);
  }

  public createForm(): void {
    this.form = this.fb.group({
      jobTitle: ['', [Validators.required, Validators.minLength(this.minLength), Validators.maxLength(this.maxTitleLength)]],
      jobDescription: ['', [Validators.required, Validators.minLength(this.minLength), Validators.maxLength(this.maxDescrLength)]],
      jobCategory: ['', Validators.required],
      jobStatus: ['', Validators.required],
    });
  }

  public onSubmit(): void {
    console.log(this.form);
  }

}
