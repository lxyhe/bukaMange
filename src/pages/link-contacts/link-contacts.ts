import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the LinkContactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-link-contacts',
  templateUrl: 'link-contacts.html',
})
export class LinkContactsPage {

  public linkWechat: any = "";
  public linkName: any = "";
  public linkPost: any = "";
  public linkPhone: any = "";
  public linkEmail: any = ""

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    // if (navParams.get('linkcontacts') == "未填写") {
    //   this.queryText = "";
    // } else {
    //   this.queryText = navParams.get('nickName');
    // }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientMamePage');
  }
  dismiss() {

    // let data = { 'nickName': this.queryText };
    // this.viewCtrl.dismiss(data);
  }
}
