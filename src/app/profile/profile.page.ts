import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profile = {
    img:{url:'https://www.maerakluke.com/wp-content/uploads/2014/05/35222.jpg'},
    name:'ด.ช.เอก',
    lastname:'เมืองลพ'
  }
  constructor(
    public route: NavController
  ) { }

  ngOnInit() {
  }
  backtab4() {
    this.route.navigateForward('/tab4');
  }
}
