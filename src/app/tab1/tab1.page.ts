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
    class : "1",
    room : "1"
  }


  
  constructor(public studentService: StudentService,
    public route: NavController
  ) { }
  ngOnInit(){
    this.getData();
  }
  list(item) {
    this.route.navigateForward(['/profile',{sss:JSON.stringify(item)}]);
    console.log(item);
  }
  async getData(){
    this.data = await this.studentService.getData();
    console.log(this.data);
  }
}

