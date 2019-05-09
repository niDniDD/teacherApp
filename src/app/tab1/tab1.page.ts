import { Component } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { StudentService } from '../services/student.service';
import { ActivatedRoute } from '@angular/router';
import { ProfilePage } from '../profile/profile.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  data: any;
  dataclass: any;
  dataclassSchool:any;
  datasuccess = false
  
  constructor(public studentService: StudentService,
    public route: NavController,
    public act: ActivatedRoute,
    public modalcontroller: ModalController,
  ) {}
  
  ngOnInit() {
    if(!localStorage.getItem('@dataClass')){
      let res:any = this.act.snapshot.paramMap.get('dataClassroom');
      this.dataclass = JSON.parse(res)
      localStorage.setItem('@dataClass', JSON.stringify(this.dataclass));
      this.getData()
    }else{
      const res:any = localStorage.getItem('@dataClass');
      this.dataclass = JSON.parse(res)
      this.getData()
    }
  }

  async list(item) {
    item.dataclass = this.dataclass
    this.route.navigateForward(['/profile', { data: JSON.stringify(item) }]);
  }

  goBack(){
    localStorage.removeItem('@dataClass');
    this.route.navigateBack('/classroom');
  }

  async getData() {
    this.dataclassSchool = {
      class: this.dataclass.class,
      classroom: this.dataclass.room,
      classtype: this.dataclass.classtype,
      school_id: this.dataclass.dataschool.school_id,
      term: this.dataclass.dataschool.term,
      year: this.dataclass.dataschool.year
    }
    try {
      this.data = await this.studentService.getStudentById(this.dataclassSchool);
      for (let index = 0; index < this.data.datas.length; index++) {
        const element = this.data.datas[index];
        // const Student:any = await this.studentService.getStudent(element.citizenid)
        // this.data.datas[index].image = Student.data.student.image
        if(!this.data.datas[index].image){
          this.data.datas[index].image = 'https://cdn.iconscout.com/icon/free/png-256/account-profile-avatar-man-circle-round-user-30452.png'
        }
      }
      this.datasuccess = true
    } catch (error) {
      throw error
    }

  }
}

