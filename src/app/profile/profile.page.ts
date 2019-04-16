import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  data: any;

  constructor(
    public route: NavController,
    public act: ActivatedRoute
  ) { }

  ngOnInit() {

    let res: any = this.act.snapshot.paramMap.get('sss');
    this.data = JSON.parse(res)

    console.log(this.data)
  }
  backtab4() {
    this.route.navigateBack('/tabs/tab1');
  }
  score(){
    this.route.navigateBack('/score');
  }
  goProtfolio() {
    this.route.navigateForward('/protfolio')
  }
  evo() {
    this.route.navigateForward('/evo')
  }
  editprofile() {
    this.route.navigateForward('/edit-profile')
  }
  profilesave(){
    this.route.navigateForward('/profile-save')
  }
 
}
