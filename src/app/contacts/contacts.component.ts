import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  
  // when you add to this string replace (white space) white '+'
  public googleAPIkey = 'AIzaSyD9kOt3N8gGOYNE48xsLGocMaIpyKsZC1E';
  public searchCity = 'Sofia';
  public googleMapsURL = `https://www.google.com/maps/embed/v1/place?key=${this.googleAPIkey}&q=${this.searchCity}`;

  
  constructor() { }

  ngOnInit() {
  }

}
