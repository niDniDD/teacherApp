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
import { AuthService } from '../services/auth/auth.service';
import { HistoryHeightWeightPage } from '../history-height-weight/history-height-weight.page';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  data: any;
  datauser:any;
  dataclass: any;
  dataportfolio:any;
  dataWeightHeight:any;

  constructor(
    public route: NavController,
    public act: ActivatedRoute,
    public modalcontroller: ModalController,
    public popoverController: PopoverController,
    public studentService: StudentService,
    private auth: AuthService

  ) { }

  ngOnInit() {
    let res: any = this.act.snapshot.paramMap.get('sss');
    this.data = JSON.parse(res)
    this.getUser()
  }
  
  backtab4() {
    this.route.navigateBack('/tabs/tab1');
  }

  async score() {
    const modal = await this.modalcontroller.create({
      component: ScorePage,
      componentProps: {
        data: this.dataclass.data.class[0].gradetemplate.subjects
      }
    });
    return await modal.present();
  }

  async goProtfolio() {
    const modal = await this.modalcontroller.create({
      component: ProtfolioPage,
      componentProps: {
        data: this.dataportfolio.data.items
      }
    });
    return await modal.present();
  }
  
  async evo() {
    const modal = await this.modalcontroller.create({
      component: EvoPage,
      componentProps: {
        data: this.dataclass.data.class[0].developmenttemplate.developments
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
        data: this.dataWeightHeight.data.personality[0]
      }
    });
    return await modal.present();
  }

  async presentPopover(event) {
    const popover = await this.popoverController.create({
      component: ProfileComponent,
      event,
      translucent: true
    });
    return await popover.present();
  }

  async getUser() {
    const res:any = await this.auth.getUser();
    var bodyRoom = {
      citizenid: res.data.citizenid,
      school_id: res.data.schoolid
    }
    const resRoom: any = await this.studentService.getRoom(bodyRoom)
    this.datauser = res;
    this.dataclass = resRoom;
    this.getPortfolio()
    this.getWeightHeight()
  }

  async getPortfolio(){
    var Portfolio = {
      citizenid: this.data.citizenid,
	    class: this.dataclass.data.class[0].class,
      classroom: this.dataclass.data.class[0].room,
      classtype: this.dataclass.data.class[0].classtype,
      school_id: this.datauser.data.schoolid,
      studentname: this.data.nametitle +this.data.firstname +" " +this.data.lastname,
      term: this.dataclass.data.term,
      year: this.dataclass.data.year
    }
    this.dataportfolio = await this.studentService.getPortfolio(Portfolio)
  }

  async getWeightHeight(){
    var WeightHeight = {
      citizenid: this.data.citizenid,
	    class: this.dataclass.data.class[0].class,
      classroom: this.dataclass.data.class[0].room,
      classtype: this.dataclass.data.class[0].classtype,
      school_id: this.datauser.data.schoolid,
      studentname: this.data.nametitle +this.data.firstname +" " +this.data.lastname,
      term: this.dataclass.data.term,
      year: this.dataclass.data.year
    }
    this.dataWeightHeight = await this.studentService.getWeightHeight(WeightHeight)
  }

}
