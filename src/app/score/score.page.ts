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
  grad:any
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
    this.getData()
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
	    class: this.data.dataclass.class,
      classroom: this.data.dataclass.room,
      classtype: this.data.dataclass.classtype,
      grade: this.grad,
      school_id: this.data.dataclass.dataschool.school_id,
      term: this.data.dataclass.dataschool.term,
      year: this.data.dataclass.dataschool.year
    }
    const res = await this.studentService.saveGrade(bodyStudent)
    if(res){
      console.log(res);
      this.modalcontroller.dismiss();
    }
  }

  async getData() {
    this.data.dataclass.gradetemplate.subjects.forEach(element => {
      element.point = 0
    });
    this.datascore = this.data.dataclass.gradetemplate.subjects
    console.log(this.datascore);
  }
  
}

