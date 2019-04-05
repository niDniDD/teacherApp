import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EvoPage } from './evo.page';

const routes: Routes = [
  {
    path: '',
    component: EvoPage
  },
  {
    path: 'evo',
    children: [
      {
        path: '',
        loadChildren: '../evo/evo.module#EvoPageModule'
      }
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EvoPage]
})
export class EvoPageModule {}
