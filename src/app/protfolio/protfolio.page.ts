import { PortfolioSavePage } from './../portfolio-save/portfolio-save.page';
import { Component, OnInit } from '@angular/core';
import { NavController, ModalController  } from '@ionic/angular';
import { PortfolioService } from '../services/portfolio/portfolio.service';

@Component({
  selector: 'app-protfolio',
  templateUrl: './protfolio.page.html',
  styleUrls: ['./protfolio.page.scss'],
})
export class ProtfolioPage implements OnInit {
data: any
dataPortfolio: any;

  constructor(
    public route: NavController,
    public modalcontroller: ModalController,
    public portfolioservice: PortfolioService
  ) { }


  ngOnInit() {
    this.getData();
  }

  async getData(){
    this.dataPortfolio = await this.portfolioservice.getData();
    console.log(this.dataPortfolio);
  }
  
  back() {
    this.modalcontroller.dismiss();
  }
  async addPort() {
    const modal = await this.modalcontroller.create({
      component: PortfolioSavePage ,
      componentProps: {
        data: this.data
      }
    });
    return await modal.present();
  }
}
