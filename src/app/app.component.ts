import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'apptemplate',
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage: any = 'TabsPage';
  rootPage: any = 'LogingPage';

  constructor(
    platform: Platform, statusBar: StatusBar,
    splashScreen: SplashScreen,
    storage: Storage,
    //navCtrl: NavController,
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      storage.get('tokenID').then(data => {
        // if (data !== "" && data !== null) {
        //   storage.get('roleID').then(data => {
        //     if (data == "1") {
        //       // navCtrl.setRoot('CompanyPage');
        //     }
        //   })
        // }
        //console.log(data);

      })

    });
  }
}
