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
  { path: 'profile-save', loadChildren: './profile-save/profile-save.module#ProfileSavePageModule' },  { path: 'portfolio-save', loadChildren: './portfolio-save/portfolio-save.module#PortfolioSavePageModule' }






];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}


