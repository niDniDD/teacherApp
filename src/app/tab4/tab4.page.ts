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
<<<<<<< HEAD

  goProfile() {
    this.route.navigateForward('/profile');
  }

=======
  goProtfolio() {
    this.route.navigateForward('/protfolio')
  }
>>>>>>> f792b42c76e12260adef7acb828b54a6d3dacf4f
}
