import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-score',
  templateUrl: './score.page.html',
  styleUrls: ['./score.page.scss'],
})
export class ScorePage implements OnInit {

  Score = [{name:'ภาษาไทย'},{name:'ภาษาอังกฤษ'},{name:'คณิตศาสตร์'}]
  constructor(public route: NavController) { }

  ngOnInit() {
  }

  backProfile() {
    this.route.navigateBack('/profile')
  }

}
