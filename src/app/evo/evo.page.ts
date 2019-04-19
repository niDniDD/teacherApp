import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { EvoserviceService } from '../services/evoservice/evoservice.service';

@Component({
  selector: 'app-evo',
  templateUrl: './evo.page.html',
  styleUrls: ['./evo.page.scss'],
})
export class EvoPage implements OnInit {
data: any;
evo: any;
  constructor(
    public route: NavController,
    public act: ActivatedRoute,
    public modalcontroller:ModalController,
    public evoservice : EvoserviceService
  ) { }

  ngOnInit() {
    this.evoData();
  }
  goBack() {
    this.modalcontroller.dismiss();
  }

  async evoData(){
    this.evo = await this.evoservice.getdata()
    console.log(this.evo);
  }

}
