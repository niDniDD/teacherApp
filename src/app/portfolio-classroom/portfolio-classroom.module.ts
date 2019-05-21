import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PortfolioClassroomPage } from './portfolio-classroom.page';

const routes: Routes = [
  {
    path: '',
    component: PortfolioClassroomPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PortfolioClassroomPage]
})
export class PortfolioClassroomPageModule {}
