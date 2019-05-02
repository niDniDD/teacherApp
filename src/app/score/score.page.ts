import { Component, OnInit, Input } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { ScoreService } from '../services/score/score.service';
import { StudentService } from '../services/student.service';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.page.html',
  styleUrls: ['./score.page.scss'],
})
export class ScorePage implements OnInit {
  @Input() data: any;
  datauser:any;
  dataclass:any;
  grad:any
  score:Array<any>=[]
  datascore:any
  totalfullpoint = 0;
  totalpoint = 0;
  totalpercepoint = 0;
  percepoint;
  constructor(
    public route: NavController,
    public modalcontroller: ModalController,
    public scoreservice: ScoreService,
    public studentService: StudentService,
    public auth:AuthService
  ) { }

  ngOnInit() {
    this.setData()
  }

  backProfile() {
    this.modalcontroller.dismiss();
  }

  async success() {
    for (let i = 0; i < this.datascore.length; i++) {
      let element = this.datascore[i];
      this.totalpoint += parseInt(element.point)
      this.totalfullpoint += parseInt(element.fullpoint)
      this.percepoint = element.point/element.fullpoint*100
      this.datascore[i].percent = String(this.percepoint)
    }

    this.totalpercepoint = this.totalpoint/this.totalfullpoint*100
    this.grad = {
      name:"Grad",
      getpointamount:this.totalpoint,
      percenamount:this.totalpercepoint,
      pointamount:this.totalfullpoint,
      subjects:this.datascore
    }
    var bodyStudent = {
      citizenid: this.data.citizenid,
	    class: this.dataclass.data.class[0].class,
      classroom: this.dataclass.data.class[0].room,
      classtype: this.dataclass.data.class[0].classtype,
      grade: this.grad,
      school_id: this.datauser.data.schoolid,
      term: this.dataclass.data.term,
      year: this.dataclass.data.year
    }
    console.log(bodyStudent)
    const res = await this.studentService.saveGrade(bodyStudent)
    console.log(res)
    if(res){
      this.modalcontroller.dismiss();
    }
  }

  async setData() {
    this.data.dataclass.gradetemplate.subjects.forEach(element => {
      element.point = 0
    });
    this.datascore = this.data.dataclass.gradetemplate.subjects
    console.log(this.data);
  }
  
}

