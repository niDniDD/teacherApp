import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(
    public route: NavController
  ) { }

  ngOnInit() {
  }

  async logOut() {
    window.localStorage.clear();
    let res = window.localStorage.getItem('@token')
    console.log(res);
    if (!res) {
      this.route.navigateForward("/signin")
    }
  }

}
