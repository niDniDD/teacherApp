import * as tslib_1 from "tslib";
import { PortfolioSavePageModule } from './portfolio-save/portfolio-save.module';
import { ProfilePageModule } from './profile/profile.module';
import { ProtfolioPageModule } from './protfolio/protfolio.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { StudentService } from './services/student.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScorePageModule } from './score/score.module';
import { EvoPageModule } from './evo/evo.module';
import { ProfileSavePageModule } from './profile-save/profile-save.module';
import { EditProfilePageModule } from './edit-profile/edit-profile.module';
import { ScoreService } from './services/score/score.service';
import { EvoserviceService } from './services/evoservice/evoservice.service';
import { PortfolioService } from './services/portfolio/portfolio.service';
import { HistoryHeightWeightPageModule } from './history-height-weight/history-height-weight.module';
import { HistoryPortfolioPageModule } from './history-portfolio/history-portfolio.module';
import { ProfileComponent } from './profile/profile.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [AppComponent, ProfileComponent],
            entryComponents: [ProfileComponent],
            imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ProtfolioPageModule, ProfilePageModule, HttpClientModule, ScorePageModule, EvoPageModule, ProfileSavePageModule, EditProfilePageModule, PortfolioSavePageModule, HistoryHeightWeightPageModule, HistoryPortfolioPageModule],
            providers: [
                StatusBar,
                SplashScreen,
                { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
                StudentService,
                ScoreService, EvoserviceService, PortfolioService
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map