import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { StudentService } from '../services/student.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.page.html',
  styleUrls: ['./classroom.page.scss'],
})
export class ClassroomPage implements OnInit {
  dataclass: any;
  datasuccess = false

  constructor(
    private auth: AuthService,
    public studentService: StudentService,
    public route: NavController
  ) { }

  ngOnInit() {
    localStorage.removeItem('@dataClass');
    this.getData()
  }

  studentList(item){
    item.dataschool = {
      school_id:this.dataclass.data.school_id,
      term:this.dataclass.data.term,
      year:this.dataclass.data.year,
      _id:this.dataclass.data._id
    }
    this.route.navigateForward(['/tabs/tab1', { dataClassroom: JSON.stringify(item) }]);
  }

  async getData(){
    const res: any = await this.auth.getUser();
    if(res.data){
      var bodyRoom = {
        citizenid: res.data.citizenid,
        school_id: res.data.schoolid
      }
      const resRoom: any = await this.studentService.getRoom(bodyRoom)
      this.dataclass = resRoom;
      this.datasuccess = true
    }
  }
}
