import { Component, OnInit, Input } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { ScoreService } from '../services/score/score.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.page.html',
  styleUrls: ['./score.page.scss'],
})
export class ScorePage implements OnInit {
  @Input() data: any ;
  score:any = [];

  Score = [{name:'ภาษาไทย'},{name:'ภาษาอังกฤษ'},{name:'คณิตศาสตร์'}]
  constructor(
    public route: NavController,
    public modalcontroller:ModalController,
    public scoreservice:ScoreService
    ) { }

  ngOnInit() {
    this.getDataScore();
  }

  backProfile() {
    this.modalcontroller.dismiss();
  }
  async getDataScore(){
    this.score = await this.scoreservice.getdatascore()
    console.log(this.data);
  }
  
  }

