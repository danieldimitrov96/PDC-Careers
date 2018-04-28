import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequestOptions } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
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
  @ViewChild('cv') public cv: ElementRef;
  @ViewChild('coverLetter') public coverLetter: ElementRef;
  private minLength = 3;
  private maxLength = 100;
  private commentMax = 1024;

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute,
              private careersService: CareersService,
              private location: Location) {
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
        // console.log(this.job);
      });
  }
  public createForm(): void {
    this.form = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(this.minLength)]],
      lastName: ['', [Validators.required, Validators.minLength(this.minLength), Validators.maxLength(this.maxLength)]],
      comment: ['', Validators.maxLength(this.commentMax)],
      cv: ['', Validators.required],
      coverLetter: ['', Validators.required],
    });
  }

  public onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('cv').setValue(file);
      this.form.get('coverLetter').setValue(file);
    }
  }

  public onSubmit(): void {
    const formModel = this.prepareSave();
    this.loading = true;
    // In a real-world app you'd have a http request / service call here like
    // this.http.post('apiUrl', formModel)
    setTimeout(() => {
      // FormData cannot be inspected (see "Key difference"), hence no need to log it here
      alert('done!');
      this.loading = false;
      // tslint:disable-next-line:no-magic-numbers
    },         1000);
  }

  public onBack(): void {
    this.form.get('cv').setValue(null);
    this.form.get('coverLetter').setValue(null);
    this.form.get('firstName').setValue(null);
    this.form.get('lastName').setValue(null);
    this.form.get('comment').setValue(null);
    this.cv.nativeElement.value = '';
    this.coverLetter.nativeElement.value = '';
    this.location.back();
    // firstName.nativeElement.value = '';
    // this.coverLetter.nativeElement.value = '';
    // this.coverLetter.nativeElement.value = '';
  }

  private prepareSave(): FormData {
    const input = new FormData();
    input.append('firstName', this.form.get('firstName').value);
    input.append('lastName', this.form.get('lastName').value);
    input.append('comment', this.form.get('comment').value);
    input.append('cv', this.form.get('cv').value);
    input.append('coverLetter', this.form.get('coverLetter').value);
    return input;
  }
}
