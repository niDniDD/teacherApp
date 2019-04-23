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

  Level = {
    class: "1",
    room: "1"
  }
  classSchool = {
    class: "1",
    classroom: "1",
    classtype: "ประถมศึกษา",
    school_id: "5c8781a912124c001351a841",
    term: "1",
    year: "2562"
  }



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
    try {
      var body = this.classSchool
      console.log(body);
      this.data = await this.studentService.getStudentById(body);
      console.log(this.data);
    } catch (error) {
      throw error
    }

  }

 async getUser() {
    const res: any = await this.auth.getUser();
    console.log(res)
  }

}

