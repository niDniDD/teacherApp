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
  totalscore:number=0;
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
    this.grad = {
      name:"Grad",
      getpointamount:60,
      percenamount:20,
      pointamount:300,
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
    console.log(this.totalscore)
  }

  async getData() {
    this.datauser = await this.auth.getUser();
    var bodyRoom = {
      citizenid: this.datauser.data.citizenid,
      school_id: this.datauser.data.schoolid
    }
    this.dataclass = await this.studentService.getRoom(bodyRoom)
    this.datascore = this.dataclass.data.class[0].gradetemplate.subjects
  }

}

