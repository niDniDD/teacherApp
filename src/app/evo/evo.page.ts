import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-evo',
  templateUrl: './evo.page.html',
  styleUrls: ['./evo.page.scss'],
})
export class EvoPage implements OnInit {

  constructor(
    public route: NavController,
    public act: ActivatedRoute
  ) { }

  ngOnInit() {
    
  }
  goBack() {
    this.route.navigateBack('/profile')
  }
}
