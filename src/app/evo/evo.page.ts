import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-evo',
  templateUrl: './evo.page.html',
  styleUrls: ['./evo.page.scss'],
})
export class EvoPage implements OnInit {
data: any;
  constructor(
    public route: NavController,
    public act: ActivatedRoute,
    public modalcontroller:ModalController
  ) { }

  ngOnInit() {
    
  }
  goBack() {
    this.modalcontroller.dismiss();
  }
}
