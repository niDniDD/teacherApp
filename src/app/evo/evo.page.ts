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
  dataevo:any
  res:any
  constructor(
    public route: NavController,
    public act: ActivatedRoute,
    public modalcontroller:ModalController,
    public evoservice : EvoserviceService,
    public studentService: StudentService
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
      class: this.data.dataclass.class,
      classroom: this.data.dataclass.room,
      classtype: this.data.dataclass.classtype,
      school_id: this.data.dataclass.dataschool.school_id,
      studentid: this.data.studentid,
      term: this.data.dataclass.dataschool.term,
      year: this.data.dataclass.dataschool.year,
      development: this.res.data.development,
      _id:this.res.data._id
    }
    const res = await this.studentService.saveDevelopment(bodyDevelopments)
    console.log(res);
  }

  async onCheck(item,itemChk,indexDataevo,indexItem){
    item.point = itemChk
    this.dataevo[indexDataevo].items[indexItem].point = String(item.point)
  }

  async getData() {
    var bodyDevelopments = {
      citizenid: this.data.citizenid,
      class: this.data.dataclass.class,
      class_id: this.data.dataclass._id,
      classroom: this.data.dataclass.room,
      classtype: this.data.dataclass.classtype,
      school_id: this.data.dataclass.dataschool.school_id,
      schoolyear_id : this.data.dataclass.dataschool._id,
      term: this.data.dataclass.dataschool.term,
      year: this.data.dataclass.dataschool.year
    }
    this.res = await this.studentService.getDevelopment(bodyDevelopments)
    this.dataevo = this.res.data.development.developments
    console.log(this.dataevo);
  }
}
