
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
  selector: 'page-private-client-remarks',
  templateUrl: 'private-client-remarks.html',
})
export class PrivateClientRemarksPage {
  public queryText = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    if (navParams.get('remark') == "未填写") {
      this.queryText = "";
    } else {
      this.queryText = navParams.get('remark');
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientMamePage');
  }
  dismiss() {

    let data = { 'remark': this.queryText };
    this.viewCtrl.dismiss(data);
  }

}
