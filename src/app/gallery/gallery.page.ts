import { StudentService } from './../services/student.service';
import { Component, OnInit } from '@angular/core';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
  data: any
  gallery: any = [
    {
      image: 'http://1.bp.blogspot.com/-9Tx8hQaDS0o/Te5PDeWhqoI/AAAAAAAAAaA/wNdLruz18i8/s1600/kitty-cu.gif'
    },
    {
      image: 'https://i.ytimg.com/vi/PU6vyUuNobs/maxresdefault.jpg'
    },
    {
      image: 'https://i.ytimg.com/vi/T8n100YxNJg/maxresdefault.jpg'
    },
    {
      image: 'https://i.ytimg.com/vi/Tv9vtj2ntLw/maxresdefault.jpg'
    }
  ]
  datasuccess = false
  classroom: any;
  portfolio: any;
  imgPortfolio: any = [];

  constructor(
    private photoViewer: PhotoViewer,
    public act: ActivatedRoute,
    public route: NavController,
    public studentservice: StudentService
  ) { }

  async ngOnInit() {
    this.datasuccess = false;
    let res: any = await this.act.snapshot.paramMap.get('data');
    this.data = await JSON.parse(res)
    // console.log(this.data);
    this.getPortfolio();
  }

  async getPortfolio() {
    let res: any = await window.localStorage.getItem('classroom');
    this.classroom = await JSON.parse(res)
    // console.log(this.classroom);
    let body = {
      citizenid: this.data.citizenid,
      class: this.data.class,
      classroom: this.data.classroom,
      classtype: this.data.classtype,
      school_id: this.classroom.dataschool.school_id,
      studentname: this.data.firstname + this.data.lastname,
      term: this.classroom.dataschool.term,
      year: this.classroom.dataschool.year,
    }
    let resp: any = await this.studentservice.getPortfolio(body);
    this.portfolio = await resp;
    this.portfolio.data.items.forEach(port => {
      port.images.forEach(img => {
        this.imgPortfolio.push(img);
      });
    });
    this.datasuccess = true;

  }

  viewer(image: string) {
    // console.log(image);
    this.photoViewer.show(image, '', { share: false });
  }

  goBack() {
    this.route.navigateBack('/portfolio-classroom');
  }

}
