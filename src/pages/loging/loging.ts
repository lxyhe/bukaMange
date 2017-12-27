import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, Platform } from 'ionic-angular';

import { HttpLodingService } from '../../providers/loadingServer';
import { ajaxService } from '../../providers/ajaxServe';
import { Storage } from '@ionic/storage';
import { BackButtonService } from '../../providers/backbuttonServe';
/**
 * Generated class for the LogingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export class LogingObject {
  username: string = "";
  password: string = "";
}

@IonicPage()
@Component({
  selector: 'page-loging',
  templateUrl: 'loging.html',
})
export class LogingPage {
  public logingObJ: LogingObject;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public event: Events,
    public httploading: HttpLodingService,
    public ajaxServe: ajaxService,
    private storage: Storage,
    private platform: Platform,
    private backbutton: BackButtonService
  ) {
    platform.ready().then(() => {
      this.backbutton.registerBackButtonAction(null);
    })
    this.logingObJ = new LogingObject;
  }
  loginMange() {
    if (this.logingObJ.username == "") {
      this.httploading.alertServe("账号不为空");
      return;
    } else if (this.logingObJ.password == "") {
      this.httploading.alertServe("密码不为空");
      return;
    }
    else {
      this.httploading.HttpServerLoading("登录中...")
      this.ajaxServe.LogingCrm(this.logingObJ).then(data => {
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
            if (data.data != null) {
              let userInfo = {
                roleid: data.data.roleid,
                tokenid: data.data.tokenid,
                userid: data.data.userid
              }
              this.storage.set('userInfo', userInfo);
              // this.storage.set('tokenid', data.data.tokenid);
              // this.storage.set('userid', data.data.userid);
              if (data.data.roleid == 1) {
                this.navCtrl.setRoot('CompanyPage');
              } else {
                this.navCtrl.setRoot('TabsPage');
              }

              // if (data.data.roleid == 2) {
              //   console.log("总监");
              //   this.navCtrl.setRoot('TabsPage');
              // }
              // if (data.data.roleid == 3) {
              //   console.log("个人");
              //   this.navCtrl.setRoot('TabsPage');
              // }
            }
          }
        }
      }).catch(err => {
        this.httploading.alertServe("服务异常" + err);
        this.httploading.ColseServerLoding();
      })

    }

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
