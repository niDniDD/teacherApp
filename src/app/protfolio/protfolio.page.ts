
import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { PortfolioService } from '../services/portfolio/portfolio.service';
import { StudentService } from '../services/student.service';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';


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
  datasuccess = false;
  portfolioData: Array<any> = [];
  constructor(
    public route: NavController,
    public modalcontroller: ModalController,
    public portfolioservice: PortfolioService,
    private studentService: StudentService,
    private photoViewer: PhotoViewer,
  ) { }


  ngOnInit() {
    this.getData();
  }

  back() {
    this.modalcontroller.dismiss();
  }
  async getData() {
    var bodyStudent = {
      citizenid: this.data.citizenid,
      class: this.data.dataclass.class,
      classroom: this.data.dataclass.room,
      classtype: this.data.dataclass.classtype,
      studentname: this.data.nametitle + this.data.firstname + " " + this.data.lastname,
      school_id: this.data.dataclass.dataschool.school_id,
      term: this.data.dataclass.dataschool.term,
      year: this.data.dataclass.dataschool.year
    }
    this.dataPortfolio = await this.studentService.getPortfolio(bodyStudent)
    this.dataPortfolio.data.items.forEach(item => {
      item.images.forEach(img => {
        let data = {
          title: item.title,
          date: item.date,
          detail: item.detail,
          images: img
        }
        console.log(data);
        this.portfolioData.push(data)
      });
    });
    this.datasuccess = true;
    console.log(this.dataPortfolio)
  }
  viewer(image: string) {
    // console.log(image);
    this.photoViewer.show(image, '', { share: false });
  }
}
