import { AuthService } from './../services/auth/auth.service';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  data: any;
  dataclass: any;

  constructor(public studentService: StudentService,
    public route: NavController,
    private auth: AuthService
  ) { }
  ngOnInit() {
    this.getUser();
    this.getData();
  }

  list(item) {
    this.route.navigateForward(['/profile', { sss: JSON.stringify(item) }]);
    console.log(item);
  }

  async getData() {
    var classSchool = {
      class: this.dataclass.data.class[0].class,
      classroom: this.dataclass.data.class[0].room,
      classtype: this.dataclass.data.class[0].classtype,
      school_id: this.dataclass.data.school_id,
      term: this.dataclass.data.term,
      year: this.dataclass.data.year
    }
    console.log(classSchool);
    try {

      this.data = await this.studentService.getStudentById(classSchool);
      console.log(this.data);
    } catch (error) {
      throw error
    }

  }

  async getUser() {
    const res: any = await this.auth.getUser();
    console.log(res)

    var bodyRoom = {
      citizenid: res.data.citizenid,
      school_id: res.data.schoolid
    }
    const resRoom: any = await this.studentService.getRoom(bodyRoom)
    console.log(resRoom)
    this.dataclass = resRoom;
    this.getData();
  }



}

