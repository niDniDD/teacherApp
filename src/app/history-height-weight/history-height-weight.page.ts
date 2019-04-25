import { StudentService } from './../services/student.service';
import { AuthService } from './../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProfileSavePage } from '../profile-save/profile-save.page';

@Component({
  selector: 'app-history-height-weight',
  templateUrl: './history-height-weight.page.html',
  styleUrls: ['./history-height-weight.page.scss'],
})
export class HistoryHeightWeightPage implements OnInit {
  data: any
  datauser: any;
  dataclass: any;
  dataWeightHeight: any;
  test: any;
  constructor(
    public modalcontroller: ModalController,
    private auth: AuthService,
    private studentService: StudentService,
  ) { }

  ngOnInit() {
    console.log(this.data)
    this.getData()
  }

  goBack() {
    this.modalcontroller.dismiss();
  }

  async addhw() {
    const modal = await this.modalcontroller.create({
      component: ProfileSavePage,
      componentProps: {
        data: this.data
      }
    });
     modal.present();
    const { data } = await modal.onDidDismiss();
    console.log(data);
  }


  async getData() {
    this.datauser = await this.auth.getUser();
    console.log(this.datauser)
    var bodyRoom = {
      citizenid: this.datauser.data.citizenid,
      school_id: this.datauser.data.schoolid
    }
    this.dataclass = await this.studentService.getRoom(bodyRoom)
    console.log(this.dataclass)
    var bodyStudent = {
      citizenid: this.data.citizenid,
      class: this.dataclass.data.class[0].class,
      classroom: this.dataclass.data.class[0].room,
      classtype: this.dataclass.data.class[0].classtype,
      school_id: this.datauser.data.schoolid,
      studentname: this.data.nametitle + this.data.firstname + " " + this.data.lastname,
      term: this.dataclass.data.term,
      year: this.dataclass.data.year
    }
    this.dataWeightHeight = await this.studentService.getWeightHeight(bodyStudent)
    console.log(this.dataWeightHeight)
  }

  
}
