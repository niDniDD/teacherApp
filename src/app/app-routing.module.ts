import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },
  { path: 'protfolio', loadChildren: './protfolio/protfolio.module#ProtfolioPageModule' },
  { path: 'evo', loadChildren: './evo/evo.module#EvoPageModule' },
  { path: 'score', loadChildren: './score/score.module#ScorePageModule' },
  { path: 'edit-profile', loadChildren: './edit-profile/edit-profile.module#EditProfilePageModule' },
  { path: 'profile-save', loadChildren: './profile-save/profile-save.module#ProfileSavePageModule' },
  { path: 'portfolio-save', loadChildren: './portfolio-save/portfolio-save.module#PortfolioSavePageModule' },
  { path: 'history-portfolio', loadChildren: './history-portfolio/history-portfolio.module#HistoryPortfolioPageModule' },
  { path: 'history-height-weight', loadChildren: './history-height-weight/history-height-weight.module#HistoryHeightWeightPageModule' },
  { path: 'signin', loadChildren: './signin/signin.module#SigninPageModule' },
  { path: 'classroom', loadChildren: './classroom/classroom.module#ClassroomPageModule' },
  { path: 'gallery', loadChildren: './gallery/gallery.module#GalleryPageModule' },
  { path: 'portfolio-classroom', loadChildren: './portfolio-classroom/portfolio-classroom.module#PortfolioClassroomPageModule' }






];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}


