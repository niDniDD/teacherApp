import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PortfolioSavePage } from './portfolio-save.page';

const routes: Routes = [
  {
    path: '',
    component: PortfolioSavePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PortfolioSavePage]
})
export class PortfolioSavePageModule {}
