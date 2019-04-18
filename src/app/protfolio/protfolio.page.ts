import { Component, OnInit } from '@angular/core';
import { NavController, ModalController  } from '@ionic/angular';
import { PortfolioService } from '../services/portfolio/portfolio.service';

@Component({
  selector: 'app-protfolio',
  templateUrl: './protfolio.page.html',
  styleUrls: ['./protfolio.page.scss'],
})
export class ProtfolioPage implements OnInit {

  dataPortfolio: any;
  constructor(
    public route: NavController,
    public modalController: ModalController,
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
    this.modalController.dismiss();
  }
}
