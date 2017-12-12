import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ClientMamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-client-mame',
  templateUrl: 'client-mame.html',
})
export class ClientMamePage {
  public queryText = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    if (navParams.get('nickName') == "未填写") {
      this.queryText = "";
    } else {
      this.queryText = navParams.get('nickName');
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientMamePage');
  }
  dismiss() {

    let data = { 'nickName': this.queryText };
    this.viewCtrl.dismiss(data);
  }

}
