import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.page.html',
  styleUrls: ['./score.page.scss'],
})
export class ScorePage implements OnInit {

  Score = [{name:'ภาษาไทย'},{name:'ภาษาอังกฤษ'},{name:'คณิตศาสตร์'}]
  constructor() { }

  ngOnInit() {
  }

}
