import { Component, OnInit } from '@angular/core';

import { ProtfolioPage } from '../protfolio/protfolio.page';
import { NavController, ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ScorePage } from '../score/score.page';
import { EvoPage } from '../evo/evo.page';

import { ProfileSavePage } from '../profile-save/profile-save.page';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  data: any;

  constructor(
    public route: NavController,
    public act: ActivatedRoute,
    public modalcontroller: ModalController
  ) { }

  ngOnInit() {

    let res: any = this.act.snapshot.paramMap.get('sss');
    this.data = JSON.parse(res)

    console.log(this.data)
  }
  backtab4() {
    this.route.navigateBack('/tabs/tab1');
  }
  async score() {
    const modal = await this.modalcontroller.create({
      component: ScorePage,
      componentProps: {
        data: this.data
      }
    });

    return await modal.present();

  }
  async goProtfolio() {
    const modal = await this.modalcontroller.create({
      component: ProtfolioPage,
      componentProps: {
        data: this.data
      }
    });
    return await modal.present();
  }
  async evo() {
    const modal = await this.modalcontroller.create({
      component: EvoPage,
      componentProps: {
        data: this.data
      }
    });

    return await modal.present();

  }
  editprofile() {
    this.route.navigateForward('/edit-profile')
  }
  async profilesave() {
    const modal = await this.modalcontroller.create({
      component: ProfileSavePage,
      componentProps: {
        data: this.data
      }
    });
    return await modal.present();
  }

}
