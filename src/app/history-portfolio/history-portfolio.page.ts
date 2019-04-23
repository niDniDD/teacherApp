import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-history-portfolio',
  templateUrl: './history-portfolio.page.html',
  styleUrls: ['./history-portfolio.page.scss'],
})
export class HistoryPortfolioPage implements OnInit {

  constructor(
    public modalcontroller: ModalController
  ) { }

  ngOnInit() {
  }

  goBack() {
    this.modalcontroller.dismiss();
  }

}
