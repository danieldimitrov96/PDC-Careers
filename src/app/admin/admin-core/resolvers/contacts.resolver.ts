import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import 'rxjs/add/operator/delay';
import { Observable } from 'rxjs/Observable';

import { IContactAdmin } from '../../models/IContactsAdmin/IContactsAdmin';
import { ContactsAdminService } from '../contacts-admin.service';

@Injectable()
export class ContactsAdminResolver implements Resolve<Observable<IContactAdmin[]>> {
  constructor(private contactsAdminService: ContactsAdminService) {}

  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
      Observable<IContactAdmin[]> | Observable<Observable<IContactAdmin[]>> | Promise<Observable<IContactAdmin[]>> {
    return this.contactsAdminService.getAll();
  }
}
