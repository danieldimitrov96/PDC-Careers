import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css'],
})
export class JobComponent {

  // constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  // public ngOnInit(): void {
  //   // will log the entire data object
  //   console.log(this.data);
  // }
}
