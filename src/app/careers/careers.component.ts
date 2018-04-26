import { DatePipe } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
    MatAccordion, MatCard, MatDatepicker, MatDatepickerInputEvent, MatExpansionPanel, MatFormField,
    MatFormFieldControl, MatOption, MatPaginator, MatSelect, MatTableDataSource,
} from '@angular/material';
import { Event } from '@angular/router';
import { CareersService } from '../core/careers.service';
import { CategoryModel } from '../models/careers/CategoryModel';
import { JobModel } from '../models/careers/JobModel';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css'],
})

export class CareersComponent implements OnInit {
  public allJobs: JobModel[];
  public allJobsFiltered: JobModel[];
  public allCategories: CategoryModel[];
  public nodata;

  constructor(private careersService: CareersService) { }
  public ngOnInit(): void {
    this.careersService.getOpenPositionsAndCategories().subscribe(
      (res) => {
        this.allJobs = res.allJobsAscending;
        this.allJobsFiltered = res.allJobsAscending;
        this.allCategories = res.allCategories;
        console.log(this.allJobs);
        console.log(this.allJobsFiltered);
      });
  }

  public dateChanged(date: MatDatepickerInputEvent<Date>): void {
    const dateSelected = new Date(date.value).setHours(0, 0, 0, 0);
    this.allJobs.map((x) => {
      return x.createdAt = new Date(x.createdAt).setHours(0, 0, 0, 0);
    });
    this.allJobsFiltered = this.allJobs.filter((x) => x.createdAt >= dateSelected);
  }
}
