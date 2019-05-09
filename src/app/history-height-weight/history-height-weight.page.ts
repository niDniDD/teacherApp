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
    this.getData()
  }

  goBack() {
    this.modalcontroller.dismiss();
  }

  async addhw() {
    const modal = await this.modalcontroller.create({
      component: ProfileSavePage,
      componentProps: {
        data: this.dataWeightHeight
      }
    });
    modal.present();
  }


  async getData() {
    var bodyStudent = {
      citizenid: this.data.citizenid,
      class: this.data.dataclass.class,
      classroom: this.data.dataclass.room,
      classtype: this.data.dataclass.classtype,
      school_id: this.data.dataclass.dataschool.school_id,
      studentname: this.data.nametitle + this.data.firstname + " " + this.data.lastname,
      term: this.data.dataclass.dataschool.term,
      year: this.data.dataclass.dataschool.year
    }
    this.dataWeightHeight = await this.studentService.getWeightHeight(bodyStudent)
    console.log(this.dataWeightHeight)
  }
}
