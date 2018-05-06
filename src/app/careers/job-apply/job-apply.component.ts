import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequestOptions } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs/Observable';

import { AppConfig } from '../../config/app.config';
import { CareersService } from '../../core/careers.service';
import { JobModel } from '../../models/careers/JobModel';

@Component({
  selector: 'app-job-apply',
  templateUrl: './job-apply.component.html',
  styleUrls: ['./job-apply.component.css'],
})
export class JobApplyComponent implements OnInit {
  public id: string;
  public job: JobModel;
  public form: FormGroup;
  public loading: boolean = false;
  @ViewChild('CV') public CV: ElementRef;
  @ViewChild('CoverLetter') public coverLetter: ElementRef;
  private minLength = 3;
  private maxLength = 100;
  private commentMax = 1024;
  private KB = 1024;
  private maxKB = 16000;

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute,
              private careersService: CareersService,
              private location: Location,
              private toastr: ToastrService,
              private appConfig: AppConfig,
              private router: Router) {
    this.createForm();
  }
  public ngOnInit(): void {
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
  public createForm(): void {
    this.form = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(this.minLength), Validators.maxLength(this.maxLength),
                       Validators.pattern(/^[A-Z]+$/i)]],
      lastName: ['', [Validators.required, Validators.minLength(this.minLength), Validators.maxLength(this.maxLength),
                      Validators.pattern(/^[A-Z]+$/i)]],
      comment: ['', Validators.maxLength(this.commentMax)],
      CV: ['', Validators.required],
      CoverLetter: [''],
    });
  }

  public onFileChange(event: any): void {
    if (event.currentTarget.files.length > 0) {
      const file = event.currentTarget.files[0];
      if (this.validFileExtension(file.name) && this.validFileSize(file.size)) {
        this.form.get(event.currentTarget.id).setValue(file);
      } else {
        this.toastr.error('Files must be of type pdf, doc or docx and no more than 16MB!', 'Invalid File', { timeOut: 5000 });
      }
    }
  }

  public onSubmit(): void {
    const formModel = this.prepareSave();
    this.loading = true;
    this.careersService.applyForJob(this.id, formModel).subscribe(
      (res) => {
        this.toastr.success(`Successfully applied for, ${this.job.title}`);
        this.location.back();
      },
      (err: HttpErrorResponse) => {
        this.toastr.error('You previously applied for this position!');
        this.location.back();
      });

    setTimeout(() => {
      this.loading = false;
    },         this.appConfig.timeOutAnimation);
  }

  public onBack(): void {
    const idParam = this.activatedRoute.snapshot.params.id;
    this.router.navigate(['careers', idParam]);
  }

  private validFileExtension(fileName: string): boolean {
    const extension = fileName.substr(fileName.lastIndexOf('.'));
    // tslint:disable-next-line:prefer-switch
    if (extension === '.pdf' || extension === '.doc'
      || extension === '.docx') {
      return true;
    }
    return false;
  }

  private validFileSize(fileSize: number): boolean {
    const fileSizeKB = fileSize / this.KB;
    if (fileSizeKB <= this.maxKB) {
      return true;
    }
    return false;
  }

  private prepareSave(): FormData {
    const input = new FormData();
    input.append('firstName', this.form.get('firstName').value);
    input.append('lastName', this.form.get('lastName').value);
    input.append('comment', this.form.get('comment').value);
    input.append('CV', this.form.get('CV').value);
    input.append('CoverLetter', this.form.get('CoverLetter').value);
    return input;
  }
}
