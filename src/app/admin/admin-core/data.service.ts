import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { ButtonAdmin } from '../models/ButtonAdmin/ButtonAdmin';
import { IButtonAdmin } from '../models/IButtonAdmin/IButtonAdmin';
import { IContactAdmin } from './../../admin/models/IContactsAdmin/IContactsAdmin';

@Injectable()
export class DataService {

  public templateButton = {hidden: false,
                           name: '',
                           type: '',
                           link: '',
                           icon: '',
                           createdAt: '',
                           _id: '' };
  public templateContact = {isPrimary: false,
                            name: '',
                            address: '',
                            createdAt: '',
                            _id: '' };
  public dataEditObject = new BehaviorSubject<IButtonAdmin>(this.templateButton);
  public currentEditObject = this.dataEditObject.asObservable();

  public contactsDataEditObject = new BehaviorSubject<IContactAdmin>(this.templateContact);
  public contactsCurrentEditObject = this.contactsDataEditObject.asObservable();
  
  public changeDataEditObject(obj: IButtonAdmin): void {
    this.dataEditObject.next(obj);
   }
  public changeContactsDataEditObject(obj: IContactAdmin): void {
    this.contactsDataEditObject.next(obj);
   }

}
