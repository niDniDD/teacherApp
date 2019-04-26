import { AuthService } from './../services/auth/auth.service';
import { PortfolioSavePage } from './../portfolio-save/portfolio-save.page';
import { Component, OnInit } from '@angular/core';
import { NavController, ModalController  } from '@ionic/angular';
import { PortfolioService } from '../services/portfolio/portfolio.service';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-protfolio',
  templateUrl: './protfolio.page.html',
  styleUrls: ['./protfolio.page.scss'],
})
export class ProtfolioPage implements OnInit {
  data: any
  dataPortfolio: any;
  datauser: any;
  dataclass: any;

  constructor(
    public route: NavController,
    public modalcontroller: ModalController,
    public portfolioservice: PortfolioService,
    private auth : AuthService,
    private studentService: StudentService
  ) { }


  ngOnInit() {
    this.getData();
  }

  
  back() {
    this.modalcontroller.dismiss();
  }
  
  async addPort() {
    const modal = await this.modalcontroller.create({
      component: PortfolioSavePage ,
      componentProps: {
        data: this.data
      }
    });
    return await modal.present();
  }
  async getData() {
    this.datauser = await this.auth.getUser();
    console.log(this.datauser)
    var bodyRoom = {
      citizenid: this.datauser.data.citizenid,
      school_id: this.datauser.data.schoolid
    }
    this.dataclass = await this.studentService.getRoom(bodyRoom)
    console.log(this.dataclass)
    var bodyStudent = {
      citizenid: this.data.citizenid,
	    class: this.dataclass.data.class[0].class,
      classroom: this.dataclass.data.class[0].room,
      classtype: this.dataclass.data.class[0].classtype,
      school_id: this.datauser.data.schoolid,
      studentname: this.data.nametitle +this.data.firstname +" " +this.data.lastname,
      term: this.dataclass.data.term,
      year: this.dataclass.data.year
    }
    this.dataPortfolio = await this.studentService.getPortfolio(bodyStudent)
    console.log(this.dataPortfolio)
  }
}
