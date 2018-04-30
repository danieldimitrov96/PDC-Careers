import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../core/contacts.service';
import { IContacts } from '../models/contacts/IContacts';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  public lat: number = 42.733883;
  public lng: number = 25.48583;

  public googleAPIkey = 'AIzaSyDdmPnh0DZQpsLa7fZ5n5TPSW0nD6pTN3s';
  public searchCity: string;
  public googleMapsURL: string;

  public contacts: IContacts;
  public primeryRootContact: object;

  constructor(private contactService: ContactsService,
              private http: HttpClient) { }

  public  ngOnInit(): void {
    this.contactService.getAll().subscribe((data) => {
      if (data) {
        this.contacts = data;
        this.primeryRootContact = data.firstPrimary;
        this.searchCity = data.firstPrimary.address;
        this.searchCity = this.searchCity.replace(/ /g, '+');
        this.googleMapsURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${this.searchCity}&key=${this.googleAPIkey}`;
        this.http.get(this.googleMapsURL).subscribe((x: any) => {
        this.lat = x.results[0].geometry.location.lat;
        this.lng = x.results[0].geometry.location.lng;
        });
      }
    });
  }
}
