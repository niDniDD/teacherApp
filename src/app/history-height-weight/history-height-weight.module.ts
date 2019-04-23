import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HistoryHeightWeightPage } from './history-height-weight.page';

const routes: Routes = [
  {
    path: '',
    component: HistoryHeightWeightPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HistoryHeightWeightPage]
})
export class HistoryHeightWeightPageModule {}
