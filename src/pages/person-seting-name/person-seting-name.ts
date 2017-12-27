import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ViewController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Storage } from '@ionic/storage';
import { HttpLodingService } from '../../providers/loadingServer';
import { ajaxService } from '../../providers/ajaxServe';


/**
 * Generated class for the PersonSetingNamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-person-seting-name',
  templateUrl: 'person-seting-name.html',
})
export class PersonSetingNamePage {
  public queryText = "";
  public tokenid: string = "";
  public userid: any = "";
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public httploading: HttpLodingService,
    public ajaxserve: ajaxService,
    private storage: Storage,
  ) {
    if (navParams.get('nickName') == "未填写") {
      this.queryText = "";
    } else {
      this.queryText = navParams.get('nickName');
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientMamePage');
  }
  setingName() {
    try {
      this.storage.get('userInfo').then((data) => {
        this.tokenid = data.tokenid;
        this.userid = data.userid;
        console.log(data);
        this.httploading.HttpServerLoading("修改中...")
        this.ajaxserve.modifiterName({ tokenid: this.tokenid, userid: this.userid, userrname: this.queryText }).then((data) => {
          if (data.status.Code == "200") {
            this.httploading.ColseServerLoding();
            console.log(data);
          }
        }).catch((err) => {
          this.httploading.ColseServerLoding();
          alert(err);
        })
      })
    }
    catch (err) {
      this.httploading.ColseServerLoding();
      console.log(err);
    }
  }

  dismiss() {
    this.setingName();
    let data = { 'nickName': this.queryText };
    this.viewCtrl.dismiss(data);
  }

}
