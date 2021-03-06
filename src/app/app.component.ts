import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { TabsPage } from '../pages/tabs/tabs';
import { Storage } from '@ionic/storage';
import { BackButtonService } from '../providers/backbuttonServe';
@Component({
  selector: 'apptemplate',
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage: any = 'TabsPage';
  // rootPage: any = 'LogingPage';
  rootPage: any;
  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    storage: Storage,
    backbutton: BackButtonService
    //navCtrl: NavController,
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      platform.ready().then(() => {
        backbutton.registerBackButtonAction(null);
      })
      storage.get('userInfo').then(data => {
        console.log(data);
        if (data == undefined || data == null) {
          this.rootPage = 'LogingPage';
        } else {
          if (data.roleid == 1) {
            this.rootPage = 'CompanyPage'
          } else {
            this.rootPage = 'TabsPage'
          }
          //this.rootPage = 'LogingPage';

        }
      })
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
