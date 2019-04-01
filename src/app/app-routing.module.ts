import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
<<<<<<< HEAD
  { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' }
=======
  { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },  { path: 'protfolio', loadChildren: './protfolio/protfolio.module#ProtfolioPageModule' }
>>>>>>> f792b42c76e12260adef7acb828b54a6d3dacf4f

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
