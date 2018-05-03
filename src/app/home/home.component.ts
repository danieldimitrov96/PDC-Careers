import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { AppConfig } from '../config/app.config';
import { HomeButtonsService } from '../core/home-buttons.service';
import { IButton } from '../models/buttons/IButton';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  
  public homeText = environment.homePageText;
  public fbPage = environment.homePageFB;
  public background = './../../assets/back-ground.jpeg';
  public offset = 700;
  public actionButtons: IButton[] = [];
  constructor(private homeButtonsService: HomeButtonsService) { }

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
