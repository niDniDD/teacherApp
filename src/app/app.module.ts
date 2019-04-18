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
import { PortfolioService } from './services/portfolio/portfolio.service';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,ProtfolioPageModule,ProfilePageModule,HttpClientModule,ScorePageModule,EvoPageModule,ProfileSavePageModule,EditProfilePageModule,PortfolioSavePageModule],


  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    StudentService,PortfolioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
