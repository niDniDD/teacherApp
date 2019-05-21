import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public route: NavController
  ) {
    this.initializeApp();
    var config = {
      apiKey: "AIzaSyCanMutez3Coe6Yg4oEhEgzMK3iHEXauz0",
      authDomain: "school-hub-37d55.firebaseapp.com",
      databaseURL: "https://school-hub-37d55.firebaseio.com",
      projectId: "school-hub-37d55",
      storageBucket: "school-hub-37d55.appspot.com",
      messagingSenderId: "116012923728"
    };
    firebase.initializeApp(config);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      if(!window.localStorage.getItem('@token')){
        this.route.navigateForward("/signin")
      }
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
