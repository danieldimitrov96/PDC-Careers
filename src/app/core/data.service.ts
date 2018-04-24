import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from '../models/user/user';

@Injectable()

export class DataService {
    public userEamil: string = 'default';
    public dataSource = new BehaviorSubject<string>(this.userEamil);
    public currentData = this.dataSource.asObservable();

    public changeData(data: string): void {
        this.dataSource.next(data);
    }
}
