import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
var routes = [
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
    { path: 'classroom', loadChildren: './classroom/classroom.module#ClassroomPageModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map