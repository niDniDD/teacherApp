import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  constructor(
    public route: NavController,
    public act: ActivatedRoute
  ) { }

  ngOnInit() {
  }
  back() {
    this.route.navigateBack('/profile')
  }
}
