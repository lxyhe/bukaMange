import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpLodingService } from '../../providers/loadingServer';
import { ajaxService } from '../../providers/ajaxServe';
/**
 * Generated class for the PrivateFloowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-private-floow',
  templateUrl: 'private-floow.html',
})
export class PrivateFloowPage {
  public fllowUpObj: object;
  public tokenid: string = "";
  public customer_id: any = "";
  public followUpList: any = "";

  public followUpAvatar: any = "assets/imgs/timg1.jpg";
  public followUpPhone: any = "";
  public followUpWechat: any = "";
  public followUpName: any = "";
  public followUpLinkCantact: any = "";
  public userid: number;
  public message: string = "";
  constructor(
    public navCtrl: NavController,
    public navparam: NavParams,
    //public event: Events,
    private storage: Storage,
    public httploading: HttpLodingService,
    public ajaxserve: ajaxService,
    public alertCtrl: AlertController,

  ) {
    this.fllowUpObj = this.navparam.get('datas')
    console.log(this.fllowUpObj);
    this.customer_id = this.fllowUpObj['customer_id'];
    this.followUpAvatar = this.fllowUpObj['avatar'];
    this.followUpPhone = this.fllowUpObj['phone'];
    this.followUpWechat = this.fllowUpObj['wechat'];
    this.followUpName = this.fllowUpObj['name'];
    this.followUpLinkCantact = this.fllowUpObj['linkCantact'];
  }
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad PrivateFloowPage');
  // }
  ionViewDidEnter() {
    this.getFlowUpList();
  }
  getFlowUpList() {
    try {
      this.storage.get('userInfo').then((data) => {
        this.tokenid = data.tokenid;
        this.httploading.HttpServerLoading("更新中...")
        this.ajaxserve.getFollowupcandion({ tokenid: this.tokenid, customer_id: this.customer_id }).then((data) => {
          if (data.status.Code = "200") {
            this.httploading.ColseServerLoding();
            console.log(data);
            this.followUpList = data.data;
          }
        }).catch((err) => {
          console.log(err);
        })
      })
    }
    catch (err) {
      console.log(err);
    }
  }
  setrecord() {
    try {
      this.storage.get('userInfo').then((data) => {
        this.tokenid = data.tokenid;
        this.userid = data.userid;
        // this.httploading.HttpServerLoading("...")
        this.ajaxserve.setRecord({ customer_id: this.customer_id, follow_up_name: this.message, userid: this.userid, tokenid: this.tokenid }).then((data) => {
          if (data.status.Code = "200") {
            //this.httploading.ColseServerLoding();
            console.log(data);
            this.getFlowUpList();
            this.message = "";
          }
        }).catch((err) => {
          console.log(err);
        })
      })
    }
    catch (err) {
      console.log(err);
    }
  }
}
