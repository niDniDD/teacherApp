import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-nid',
  templateUrl: './nid.page.html',
  styleUrls: ['./nid.page.scss'],
})
export class NidPage implements OnInit {

  constructor(
    public route: NavController
  ) { }

  ngOnInit() {
  }
  backnid() {
this.route.navigateForward('//tabs/tab4');
  }
}
