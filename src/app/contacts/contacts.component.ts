import { Component, OnInit, Pipe } from '@angular/core';
import { IContacts } from '../models/contacts/IContacts';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  public googleAPIkey = 'AIzaSyD9kOt3N8gGOYNE48xsLGocMaIpyKsZC1E';
  public searchCity: string;
  public googleMapsURL: string;

  public contacts: IContacts;
  public primeryRootContact: object;

  constructor(private contactService: ContactsService) { }

  public  ngOnInit(): void {
    this.contactService.getAll().subscribe((data) => {
      if (data) {
        this.contacts = data;
        this.primeryRootContact = data.firstPrimary;
        this.searchCity = data.firstPrimary.address;
        this.searchCity = this.searchCity.replace(/ /g, '+');
        this.googleMapsURL = `https://www.google.com/maps/embed/v1/place?key=${this.googleAPIkey}&q=${this.searchCity}`;
      }
    });

  }
}
