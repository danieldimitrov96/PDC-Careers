import { DatePipe } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import {
  MatAccordion, MatButton, MatCard, MatDatepicker, MatDatepickerInputEvent, MatDialog,
  MatExpansionPanel, MatFormField, MatFormFieldControl, MatOption, MatPaginator, MatSelect, PageEvent,
} from '@angular/material';
import { Event } from '@angular/router';
import { Subject } from 'rxjs/Subject';

import { AuthService } from '../core/auth.service';
import { CareersService } from '../core/careers.service';
import { CategoryModel } from '../models/careers/CategoryModel';
import { JobModel } from '../models/careers/JobModel';
import { JobComponent } from './job/job.component';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css'],
})

export class CareersComponent implements OnInit {
  public allJobs: JobModel[];
  public allJobsFiltered: JobModel[];
  public allCategories: CategoryModel[];
  public length: number;
  public pageSize = 10;
  public searchText: string;
  public dateSelected: number;
  public category: string;
  public date: string;
  public nodata;

  constructor(private careersService: CareersService, public authService: AuthService) { }

  public ngOnInit(): void {
    this.careersService.getOpenPositionsAndCategories().subscribe(
      (res) => {
        this.allJobs = res.allJobsAscending;
        this.allJobsFiltered = res.allJobsAscending;
        this.allCategories = res.allCategories;
        this.length = this.allJobs.length;
        this.onChangePage({
          pageIndex: 0,
          length: this.length,
          pageSize: this.pageSize,
        });
      });
  }

  public dateChanged(date: MatDatepickerInputEvent<Date>): void {
    this.dateSelected = new Date(this.date).setHours(0, 0, 0, 0);
    this.allJobsFiltered =
      this.careersService.dateChanged(this.allJobsFiltered, this.allJobs, this.dateSelected, this.searchText, this.category);
  }

  public search(): void {
    this.allJobsFiltered =
      this.careersService.searchJob(this.allJobsFiltered, this.allJobs, this.searchText, this.dateSelected, this.category);
  }

  public filterByCategory(): void {
    this.allJobsFiltered =
      this.careersService.filterByCategory(this.allJobsFiltered, this.allJobs, this.category, this.searchText, this.dateSelected);
  }

  public clearFilter(event: PageEvent): void {
    this.searchText = '';
    this.date = '';
    this.category = '';
    this.allJobsFiltered = this.allJobs.slice();
    this.onChangePage({
      pageIndex: 0,
      length: this.length,
      pageSize: this.pageSize,
    });
  }

  public onChangePage(event: PageEvent): void {
    this.allJobsFiltered = this.allJobs.slice(
      event.pageIndex * event.pageSize,
      event.pageIndex * event.pageSize + event.pageSize,
    );
  }

}
