import { Component, OnInit } from '@angular/core';
import { ButtonsService } from '../admin-core/buttons.service';
import { IButtonAdmin } from '../models/IButtonAdmin/IButtonAdmin';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
})
export class ButtonsComponent implements OnInit {

  public buttons: IButtonAdmin[];
  constructor(private buttonsService: ButtonsService) { }

  public  ngOnInit(): void {
    this.buttonsService.getAll().subscribe((data) => this.buttons = data);
    // console.log(this.buttons);
  }

}
