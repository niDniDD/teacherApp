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
        data: this.dataPortfolio
      }
    });
    return await modal.present();
  }

  async getData() {
    var bodyStudent = {
      citizenid: this.data.citizenid,
	    class: this.data.dataclass.class,
      classroom: this.data.dataclass.room,
      classtype: this.data.dataclass.classtype,
      studentname: this.data.nametitle +this.data.firstname +" " +this.data.lastname,
      school_id: this.data.dataclass.dataschool.school_id,
      term: this.data.dataclass.dataschool.term,
      year: this.data.dataclass.dataschool.year
    }
    this.dataPortfolio = await this.studentService.getPortfolio(bodyStudent)
    console.log(this.dataPortfolio)
  }
}
