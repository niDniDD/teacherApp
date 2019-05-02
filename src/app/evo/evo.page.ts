import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { EvoserviceService } from '../services/evoservice/evoservice.service';
import { StudentService } from '../services/student.service';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-evo',
  templateUrl: './evo.page.html',
  styleUrls: ['./evo.page.scss'],
})
export class EvoPage implements OnInit {
  data:any;
  datauser:any;
  dataclass:any;
  dataevo:any
  res:any
  constructor(
    public route: NavController,
    public act: ActivatedRoute,
    public modalcontroller:ModalController,
    public evoservice : EvoserviceService,
    public studentService: StudentService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.getData();
  }

  goBack() {
    this.modalcontroller.dismiss();
  }

  async Success(){
    var bodyDevelopments = {
      citizenid: this.data.citizenid,
      class: this.dataclass.data.class[0].class,
      classroom: this.dataclass.data.class[0].room,
      classtype: this.dataclass.data.class[0].classtype,
      school_id: this.datauser.data.schoolid,
      studentid: this.data.studentid,
      term: this.dataclass.data.term,
      year: this.dataclass.data.year,
      development: this.res.data.development
    }
    console.log(bodyDevelopments);
    const res = await this.studentService.saveDevelopment(bodyDevelopments)
    console.log(res);
  }

  async onCheck(item,itemChk,indexDataevo,indexItem){
    item.point = itemChk
    this.dataevo[indexDataevo].items[indexItem].point = String(item.point)
  }

  async getData() {
    this.datauser = await this.auth.getUser();
    var bodyRoom = {
      citizenid: this.datauser.data.citizenid,
      school_id: this.datauser.data.schoolid
    }
    this.dataclass = await this.studentService.getRoom(bodyRoom)
    var bodyDevelopments = {
      citizenid: this.data.citizenid,
      class: this.dataclass.data.class[0].class,
      class_id: this.dataclass.data.class[0]._id,
      classroom: this.dataclass.data.class[0].room,
      classtype: this.dataclass.data.class[0].classtype,
      school_id: this.datauser.data.schoolid,
      schoolyear_id : this.dataclass.data._id,
      term: this.dataclass.data.term,
      year: this.dataclass.data.year
    }
    this.res = await this.studentService.getDevelopment(bodyDevelopments)
    this.dataevo = this.res.data.development.developments
  }
}
