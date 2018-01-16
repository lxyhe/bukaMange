
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, Platform, AlertController } from 'ionic-angular';

import { HttpLodingService } from '../../providers/loadingServer';
import { ajaxService } from '../../providers/ajaxServe';
import { Storage } from '@ionic/storage';
//import { BackButtonService } from '../../providers/backbuttonServe';
/**
 * Generated class for the LogingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export class findpwdObject {
  username: string = "";
  password: string = "";
  password1: string = "";
}

@IonicPage()
@Component({
  selector: 'page-findpassword',
  templateUrl: 'findpassword.html',
})
export class FindpasswordPage {
  public logingObJ: findpwdObject;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public event: Events,
    public httploading: HttpLodingService,
    public ajaxServe: ajaxService,
    private storage: Storage,
    private platform: Platform,
    public alertCtrl: AlertController,
    //private backbutton: BackButtonService
  ) {

    this.logingObJ = new findpwdObject;
  }
  loginMange() {
    if (this.logingObJ.username == "") {
      this.httploading.alertServe("账号不为空");
      return;
    } else if (this.logingObJ.password == "") {
      this.httploading.alertServe("密码不为空");
      return;
    } else if (this.logingObJ.password !== this.logingObJ.password1) {
      this.httploading.alertServe("两次密码输入不一致");
      return;
    }
    else {
      this.httploading.HttpServerLoading("修改中...")
      this.ajaxServe.findPassword(this.logingObJ).then(data => {
        console.log(data);
        if (data.status.Code == "403") {
          setTimeout(() => {
            this.httploading.ColseServerLoding();
            this.httploading.alertServe(data.status.Msg);
          }, 1000)
          return;
        }
        if (data.status.Code == "200") {
          if (data.status.Msg == "成功") {
            this.httploading.ColseServerLoding();
            if (data.status.Code == "200") {
              //this.httploading.alertServe(data.status.Msg);
              let alert = this.alertCtrl.create({
                subTitle: "修改" + data.status.Msg,
                buttons: [
                  {
                    text: "确定",
                    handler: data => {
                      setTimeout(() => {
                        this.navCtrl.pop();
                      }, 100);
                    }
                  }]

              });
              alert.present();
            }

          }
        }
      }).catch(err => {
        this.httploading.alertServe("服务异常" + err);
        this.httploading.ColseServerLoding();
      })

    }

  }
  findpassword() {
    this.navCtrl.push('FindpasswordPage');
  }
  ionViewDidLoad() {
    //console.log('ionViewDidLoad LogingPage');
  }
  ionViewWillEnter() {
    //console.log('ionViewWillEnter LogingPage');
  }
  ionViewDidEnter() {
    // console.log('ionViewDidEnter LogingPage');
  }
  ionViewWillLeave() {
    // console.log('ionViewWillLeave LogingPage');
  }
  ionViewDidLeave() {
    //console.log('ionViewDidLeave LogingPage');
  }
  ionViewWillUnload() {
    //console.log('ionViewWillUnload LogingPage');
  }
  ionViewCanEnter() {
    //console.log('ionViewCanEnter LogingPage');
  }
  ionViewCanLeave() {
    // console.log('ionViewCanLeave LogingPage');
  }


}
