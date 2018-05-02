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
  }
}
