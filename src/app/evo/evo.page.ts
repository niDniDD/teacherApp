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
  radioPoint:any
  dddd= 4
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
    const res:any = await this.studentService.getDevelopment(bodyDevelopments)
    this.dataevo = res.data.development.developments
    console.log(res);
    for (let i = 0; i < res.data.development.developments.length; i++) {
      const element = res.data.development.developments[i];
      console.log(element.items);

    }
  }
}
