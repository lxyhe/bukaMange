import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LogingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export class LogingObject {
  userName: string;
  passWord: string;
}

@IonicPage()
@Component({
  selector: 'page-loging',
  templateUrl: 'loging.html',
})
export class LogingPage {
  public logingObJ: LogingObject;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.logingObJ = new LogingObject;
    // this.logingObJ.userName = "1";
    // this.logingObJ.passWord = "2";
    console.log(this.logingObJ);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LogingPage');
  }
  ionViewWillEnter() {
    console.log('ionViewWillEnter LogingPage');
  }
  ionViewDidEnter() {
    console.log('ionViewDidEnter LogingPage');
  }
  ionViewWillLeave() {
    console.log('ionViewWillLeave LogingPage');
  }
  ionViewDidLeave() {
    console.log('ionViewDidLeave LogingPage');
  }
  ionViewWillUnload() {
    console.log('ionViewWillUnload LogingPage');
  }
  ionViewCanEnter() {
    console.log('ionViewCanEnter LogingPage');
  }
  ionViewCanLeave() {
    console.log('ionViewCanLeave LogingPage');
  }


}
