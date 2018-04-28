import { DatePipe } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import {
    MatAccordion, MatButton, MatCard, MatDatepicker, MatDatepickerInputEvent, MatDialog,
    MatExpansionPanel, MatFormField, MatFormFieldControl, MatOption, MatPaginator, MatSelect,
} from '@angular/material';
import { Event } from '@angular/router';
import { Subject } from 'rxjs/Subject';

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
  public nodata;
  public searchText: string;
  public dateSelected: number;
  public category: string;
  public date: string;

  constructor(private careersService: CareersService, public dialog: MatDialog) { }

  public ngOnInit(): void {
    this.careersService.getOpenPositionsAndCategories().subscribe(
      (res) => {
        this.allJobs = res.allJobsAscending;
        this.allJobsFiltered = res.allJobsAscending;
        this.allCategories = res.allCategories;
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

  public clearFilter(): void {
    this.searchText = '';
    this.date = '';
    this.category = '';
    this.allJobsFiltered = this.allJobs.slice();
  }

  // public openDialog(e: HTMLElement): void {
  //   console.log(e);
  //   console.log(e.getAttribute('id'));
  //   const dialogRef = this.dialog.open(JobComponent, {
  //     height: '550px',
  //     data: {
  //       dataKey: '123',
  //     },
  //   });

  //   dialogRef.afterClosed().subscribe((result) => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }
}
