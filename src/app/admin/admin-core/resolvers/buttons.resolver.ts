import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import 'rxjs/add/operator/delay';
import { Observable } from 'rxjs/Observable';

import { IButtonAdmin } from './../../models/IButtonAdmin/IButtonAdmin';
import { ButtonsService } from './../buttons.service';
@Injectable()
export class ButtonsResolver implements Resolve<Observable<IButtonAdmin[]>> {
  constructor(private buttonsService: ButtonsService) {}

  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
      Observable<IButtonAdmin[]> | Observable<Observable<IButtonAdmin[]>> | Promise<Observable<IButtonAdmin[]>> {
    return this.buttonsService.getAll();
  }
}