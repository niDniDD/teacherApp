import { ProfilePageModule } from './profile/profile.module';
import { ProtfolioPageModule } from './protfolio/protfolio.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { StudentService } from './service/student.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScorePageModule } from './score/score.module';
import { EvoPageModule } from './evo/evo.module';
import { ProfilePageModule } from './profile/profile.module';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
<<<<<<< HEAD
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,ProtfolioPageModule,ProfilePageModule,HttpClientModule],
=======
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,ScorePageModule,EvoPageModule,ProfilePageModule],
>>>>>>> 6256c2e4d86665e2cac39c03abda5cc87cb6c244
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
