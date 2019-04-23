import { Component, OnInit } from '@angular/core';
import { PopoverController, ModalController } from '@ionic/angular';
import { HistoryPortfolioPage } from '../history-portfolio/history-portfolio.page';
import { HistoryHeightWeightPage } from '../history-height-weight/history-height-weight.page';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  data:any
  constructor(
    public modalcontroller: ModalController,
    public popoverController: PopoverController
    ) { }

  ngOnInit() {}

  async historyheight(){
    this.popoverController.dismiss();
    const modal = await this.modalcontroller.create({
      component: HistoryHeightWeightPage,
      componentProps: {
        data: this.data
      }
    });
    return await modal.present();
  }

  async historyportfolio(){
    this.popoverController.dismiss();
    const modal = await this.modalcontroller.create({
      component: HistoryPortfolioPage,
      componentProps: {
        data: this.data
      }
    });
    return await modal.present();
  }
  
}
