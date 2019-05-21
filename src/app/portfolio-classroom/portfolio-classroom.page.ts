import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ActionSheetController } from '@ionic/angular';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-portfolio-classroom',
  templateUrl: './portfolio-classroom.page.html',
  styleUrls: ['./portfolio-classroom.page.scss'],
})
export class PortfolioClassroomPage implements OnInit {
  data:any
  dataclass:any
  dataclassSchool:any;
  datasuccess = false
  constructor(
    public act: ActivatedRoute,
    public route: NavController,
    public actionSheetController: ActionSheetController,
    public studentService: StudentService
  ) { }

  ngOnInit() {
    let res:any = this.act.snapshot.paramMap.get('dataClassroom');
    this.dataclass = JSON.parse(res)
    this.getData()
  }

  goBack(){
    this.route.navigateBack('/classroom');
  }

  async presentActionSheet(){
    const actionSheet = await this.actionSheetController.create({
      header: 'ตัวเลือก',
      buttons: [{
        text: 'กล้องถ่ายรูป',
        icon: 'camera',
        handler: () => {
          console.log('clicked');
        }
      }, {
        text: 'อัลบั้มรูป',
        icon: 'images',
        handler: () => {
          console.log('clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async getData(){
    this.dataclassSchool = {
      class: this.dataclass.class,
      classroom: this.dataclass.room,
      classtype: this.dataclass.classtype,
      school_id: this.dataclass.dataschool.school_id,
      term: this.dataclass.dataschool.term,
      year: this.dataclass.dataschool.year
    }
    this.data = await this.studentService.getStudentById(this.dataclassSchool);
    this.datasuccess = true
    console.log(this.data);
  }
}
