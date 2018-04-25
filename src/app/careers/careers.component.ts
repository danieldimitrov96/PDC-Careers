import { Component, Input, OnInit } from '@angular/core';
import { NgbdAccordionStatic } from '../shared/careers-accordion/careers-accordion.component';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css'],
})

export class CareersComponent {
  public jobTypes = ['All', 'IT', 'HR'];
  public jobSelected = 'All';

}
