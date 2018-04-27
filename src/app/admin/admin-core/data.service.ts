import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { ButtonAdmin } from '../models/ButtonAdmin/ButtonAdmin';
import { IButtonAdmin } from '../models/IButtonAdmin/IButtonAdmin';

@Injectable()
export class DataService {

  public template = {hidden: false,
                     name: '',
                     type: '',
                     link: '',
                     icon: '',
                     createdAt: '',
                     _id: '' };
  public dataEditObject = new BehaviorSubject<IButtonAdmin>(this.template);
  public currentEditObject = this.dataEditObject.asObservable();

  constructor() {}

  public changeDataEditObject(obj: IButtonAdmin): void {
    this.dataEditObject.next(obj);
   }

}
