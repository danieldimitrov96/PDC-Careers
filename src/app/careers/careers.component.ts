import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css'],
})

export class CareersComponent implements OnInit {
  public jobTypes = ['All', 'IT', 'HR'];
  public jobSelected = 'All';

  constructor() {
   }

  ngOnInit() {

  }

}
