import { Component, OnInit } from '@angular/core';

import { ProtfolioPage } from '../protfolio/protfolio.page';
import { NavController, ModalController, PopoverController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ScorePage } from '../score/score.page';
import { EvoPage } from '../evo/evo.page';
import { EditProfilePage } from '../edit-profile/edit-profile.page';

import { ProfileSavePage } from '../profile-save/profile-save.page';
import { ProfileComponent } from './profile.component';
import { StudentService } from '../services/student.service';
import { HistoryHeightWeightPage } from '../history-height-weight/history-height-weight.page';
import { environment } from 'src/environments/environment';




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
    public modalcontroller: ModalController,
    public popoverController: PopoverController,
    public studentService: StudentService

  ) { }

  ngOnInit() {
    let res: any = this.act.snapshot.paramMap.get('data');
    let student: any = JSON.parse(window.localStorage.getItem(environment.apiUrl + '@dataStuden'));
    this.data = student
    console.log(this.data);
  }

  backtab4() {
    this.route.navigateBack('/tab1');
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

  async editprofile() {
    const modal = await this.modalcontroller.create({
      component: EditProfilePage,
      componentProps: {
        data: this.data
      }
    });
    return await modal.present();
  }

  async profilesave() {
    const modal = await this.modalcontroller.create({
      component: HistoryHeightWeightPage,
      componentProps: {
        data: this.data
      }
    });
    return await modal.present();
  }

  async presentPopover(event) {
    // const popover = await this.popoverController.create({
    //   component: ProfileComponent,
    //   event,
    //   translucent: true
    // });
    // return await popover.present();
  }

}
