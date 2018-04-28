import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequestOptions } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../../core/auth.service';
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
  @ViewChild('CoverLetter') public CoverLetter: ElementRef;
  private minLength = 3;
  private maxLength = 100;
  private commentMax = 1024;

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute,
              private careersService: CareersService,
              private location: Location,
              private authService: AuthService) {
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
        console.log(this.job);
      });
  }
  public createForm(): void {
    this.form = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(this.minLength)]],
      lastName: ['', [Validators.required, Validators.minLength(this.minLength), Validators.maxLength(this.maxLength)]],
      comment: ['', Validators.maxLength(this.commentMax)],
      CV: ['', Validators.required],
      CoverLetter: ['', Validators.required],
    });
  }

  public onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('CV').setValue(file);
      this.form.get('CoverLetter').setValue(file);
    }
  }

  public onSubmit(): void {
    const formModel = this.prepareSave();
    this.loading = true;
    console.log(this.id);
    console.log(this.form.value);

    this.careersService.applyForJob(this.id, this.form.value).subscribe(
      (res) => {
        console.log('Success');
      },
      (err: HttpErrorResponse) => {
        console.log('Fail');
      });

    setTimeout(() => {
      // FormData cannot be inspected (see "Key difference"), hence no need to log it here
      alert('done!');
      this.loading = false;
      // tslint:disable-next-line:no-magic-numbers
    },         1000);
  }

  public onBack(): void {
    this.form.get('CV').setValue(null);
    this.form.get('CoverLetter').setValue(null);
    this.form.get('firstName').setValue(null);
    this.form.get('lastName').setValue(null);
    this.form.get('comment').setValue(null);
    this.CV.nativeElement.value = '';
    this.CoverLetter.nativeElement.value = '';
    this.location.back();
    // firstName.nativeElement.value = '';
    // this.CoverLetter.nativeElement.value = '';
    // this.CoverLetter.nativeElement.value = '';
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
