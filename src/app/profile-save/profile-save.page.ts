import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ModalController} from '@ionic/angular';
import { Location } from '@angular/common';
import { StudentService } from '../services/student.service';
@Component({
  selector: 'app-profile-save',
  templateUrl: './profile-save.page.html',
  styleUrls: ['./profile-save.page.scss'],
})
export class ProfileSavePage implements OnInit {

  data:any
  item:any
  date:any
  weight:any
  height:any

  constructor(
    public route: NavController,
    public act: ActivatedRoute,
    public ModalController: ModalController,
    private studentService: StudentService
  ) { }

  ngOnInit() {
  }

  profile(){
    this.ModalController.dismiss();
  }

  async success(){
    var newpersonality = {
        date : this.date,
        height : this.height,
        weight : this.weight
    }
    this.data.data.personality.push(newpersonality)
    const res = await this.studentService.saveWeightHeight(this.data.data)
    console.log(res)
    if(res){
      this.ModalController.dismiss()
    }
    
  }
  



}
