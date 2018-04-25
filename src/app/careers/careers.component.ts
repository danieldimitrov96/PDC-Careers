import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { CareersService } from '../core/careers.service';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css'],
})

export class CareersComponent implements OnInit {
  public allJobs: object[];
  public allCategories: object[];
  public nodata;

  constructor(private careersService: CareersService) { }
  // TO DO: push jobs in array so you can use pagination!

  public ngOnInit(): void {
    this.careersService.getOpenPositionsAndCategories().subscribe(
      (res) => {
        this.allJobs = res.allJobsAscending;
        this.allCategories = res.allCategories;
        console.log(this.allJobs);
        console.log(this.allCategories);
      });
  }
}
