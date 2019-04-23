import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-history-height-weight',
  templateUrl: './history-height-weight.page.html',
  styleUrls: ['./history-height-weight.page.scss'],
})
export class HistoryHeightWeightPage implements OnInit {
  data: any
  constructor(
    public modalcontroller: ModalController
    ) { }

  ngOnInit() {
  }

  goBack() {
    this.modalcontroller.dismiss();
  }

}
