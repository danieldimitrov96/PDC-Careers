import { IContactAdmin } from './../IContactsAdmin/IContactsAdmin';

export class ContactAdmin implements IContactAdmin {
    public isPrimary: boolean;
    public name: string;
    public address: string;
    public createdAt: string;
    public _id: string;

    constructor() {
    this.isPrimary = false;
    this.name = '';
    this.address = '';
    this.createdAt = '';
    this._id = '';
  }
}
