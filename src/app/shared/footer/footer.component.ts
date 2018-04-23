import { Component, OnInit } from '@angular/core';
import { HomeButtonsService } from '../../core/home-buttons.service';
import { IButton } from '../../models/buttons/IButton';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {

  public socialButtons: IButton[] = [];
  constructor(private homeButtonsService: HomeButtonsService) { }

  public  ngOnInit(): void {
    this.homeButtonsService.getAll().subscribe((data) => {
      data.forEach((button) => {
        if (button.type !== 'Action') {
          this.socialButtons.push(button);
        }
      });
    });
  }

}
