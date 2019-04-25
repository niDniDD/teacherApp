import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ModalController} from '@ionic/angular';
@Component({
  selector: 'app-profile-save',
  templateUrl: './profile-save.page.html',
  styleUrls: ['./profile-save.page.scss'],
})
export class ProfileSavePage implements OnInit {

  data:any

  constructor(
    public route: NavController,
    public act: ActivatedRoute,
    public ModalController: ModalController
  ) { }

  ngOnInit() {
    console.log(this.data)
  }

  profile(){
    this.ModalController.dismiss();
  }
}
