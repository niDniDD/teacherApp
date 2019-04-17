import { Component, OnInit } from '@angular/core';
import { NavController,ModalController  } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ProtfolioPage } from '../protfolio/protfolio.page';

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
    public modalController: ModalController
  ) { }

  ngOnInit() {

    let res: any = this.act.snapshot.paramMap.get('sss');
    this.data = JSON.parse(res)

    console.log(this.data)
  }
  backtab4() {
    this.route.navigateBack('/tabs/tab1');
  }
  score(){
    this.route.navigateBack('/score');
  }
  async goProtfolio() {
    const modal = await this.modalController.create({
      component: ProtfolioPage,
      componentProps: {
        data: this.data
      }
    });
    return await modal.present();
  }
  evo() {
    this.route.navigateForward('/evo')
  }
  editprofile() {
    this.route.navigateForward('/edit-profile')
  }
  profilesave(){
    this.route.navigateForward('/profile-save')
  }
 
}
