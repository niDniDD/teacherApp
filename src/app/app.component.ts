import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
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
    private statusBar: StatusBar
  ) {
    this.initializeApp();
    var config = {
      apiKey: "AIzaSyC978lAlEHKICOTKfl0J3qp8xQOQh5l8nY",
      authDomain: "cameratest-abd6f.firebaseapp.com",
      databaseURL: "https://cameratest-abd6f.firebaseio.com",
      projectId: "cameratest-abd6f",
      storageBucket: "cameratest-abd6f.appspot.com",
      messagingSenderId: "830033807678"
    };
    firebase.initializeApp(config);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
