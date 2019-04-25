import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
@Component({
  selector: 'app-portfolio-save',
  templateUrl: './portfolio-save.page.html',
  styleUrls: ['./portfolio-save.page.scss'],
})
export class PortfolioSavePage implements OnInit {
  data:any


  constructor( public modalcontroller: ModalController,
    public route: NavController) { }

  ngOnInit() {
    console.log(this.data)
  }

  back() {
    this.modalcontroller.dismiss();
  }
}
