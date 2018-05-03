import { Component, OnInit } from '@angular/core';
import { AppConfig } from '../config/app.config';
import { HomeButtonsService } from '../core/home-buttons.service';
import { IButton } from '../models/buttons/IButton';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  public homeText = this.appConfig.homePageText;
  public fbPage = this.appConfig.homePageFB;
  public background = './../../assets/back-ground.jpeg';
  public offset = 700;
  public actionButtons: IButton[] = [];
  constructor(private homeButtonsService: HomeButtonsService,
              private appConfig: AppConfig) { }

  public  ngOnInit(): void {
    this.homeButtonsService.getAll().subscribe((data) => {
      data.forEach((button) => {
        if (button.type === 'Action') {
          this.actionButtons.push(button);
        }
      });
    });
    setTimeout(() => {
      console.log('You wonder what this error is about? Ask Mark Zuckerberg! Or check here: https://goo.gl/xMfKzT');
    // tslint:disable-next-line:no-magic-numbers
    },         2000);
  }
}
