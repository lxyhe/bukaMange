import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the LinkContactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export class linCantactsObj {
  name: string = "";
  post: string = "";
  phone: number | string = "";
  wechat: string | number = "";
  email: string | number = "";
}
@IonicPage()
@Component({
  selector: 'page-link-contacts',
  templateUrl: 'link-contacts.html',
})
export class LinkContactsPage {
  public isDisabled: boolean = false;
  public linkCanobj: linCantactsObj;

  public compluted: string = "完成";
  public editodr: string = "编辑";
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {

    this.linkCanobj = new linCantactsObj();
    let linkObj = navParams.get('linkcontacts');
    console.log(linkObj);
    if (linkObj.name == "未填写") {
      this.linkCanobj.name = "";
    } else if (linkObj.email == "未填写") {
      this.linkCanobj.email = "";
    } else if (linkObj.phone == "未填写") {
      this.linkCanobj.phone = "";
    } else if (linkObj.wechat == "未填写") {
      this.linkCanobj.wechat = "";
    } else if (linkObj.post == "未填写") {
      this.linkCanobj.post = "";
    } else {
      this.linkCanobj.name = linkObj.name;
      this.linkCanobj.phone = linkObj.phone;
      this.linkCanobj.wechat = linkObj.wechat;
      this.linkCanobj.post = linkObj.post;
      this.linkCanobj.email = linkObj.email;
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientMamePage');
  }
  dismiss() {
    let data = { 'linkcontacts': this.linkCanobj };
    console.log(this.linkCanobj);
    this.viewCtrl.dismiss(data);
  }
  complete(e) {

    this.compluted = "编辑";
    this.isDisabled = true;
  }
  editodrfun() {
    this.compluted = "完成";
    this.isDisabled = false;

  }
}
