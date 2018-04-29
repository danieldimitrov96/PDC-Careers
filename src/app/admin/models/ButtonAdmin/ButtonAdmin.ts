import { IButtonAdmin } from '../IButtonAdmin/IButtonAdmin';

export class ButtonAdmin implements IButtonAdmin {
  public hidden: boolean;
  public name: string;
  public type: string;
  public link: string;
  public icon: string;
  public createdAt: string;
  public _id: string;

  constructor() {
    this.hidden = false;
    this.name = '';
    this.type = '';
    this.link = '';
    this.icon = '';
    this.createdAt = '';
    this._id = '';
  }
}
