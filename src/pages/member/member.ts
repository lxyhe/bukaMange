
import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, NavParams, Events, Refresher } from 'ionic-angular';
//import { homeObj } from '../../providers/homeObj';
//import mickData from '../../providers/mickData';
import { Storage } from '@ionic/storage';
//import mickData from '../../providers/mickData';
import { HttpLodingService } from '../../providers/loadingServer';
import { ajaxService } from '../../providers/ajaxServe';
/**
 * Generated class for the MemberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



@IonicPage()
@Component({
  selector: 'page-member',
  templateUrl: 'member.html',
})
export class MemberPage {
  @ViewChild(Refresher) public refresher: Refresher;
  public memberList: Array<object>;
  public fllowList: Array<object>;
  public nofllowList: Array<object>;
  public pet: string = "puppies";
  public memberData: object;//上个页面的参数
  public privateClient: object;//私海客户
  public noFoloowUp: object;//未跟进
  public floowUp: object;//已跟进
  public account_login_id: any = "";
  public account_login_avatar: any = "";
  public account_login_name: any = "";
  public tokenid: string = "";
  public clicount: any = "";
  public follow: any = "";
  public nofollow: any = "";
  constructor(
    public navCtrl: NavController,
    public navparam: NavParams,
    public event: Events,
    private storage: Storage,
    public httploading: HttpLodingService,
    public ajaxserve: ajaxService,
  ) {

    //this.clientList = mickData;
    this.memberData = this.navparam.get('data');
    this.account_login_id = this.memberData['account_login_id'];
    this.account_login_avatar = this.memberData['account_login_avatar'];
    this.account_login_name = this.memberData['account_login_name'];
    this.clicount = this.memberData['clicount'];
    this.follow = this.memberData['follow'];
    this.nofollow = this.clicount - this.follow;
  }
  ionViewDidEnter() {
    this.getPrivatClientList()
  }
  // goClientDetails(items) {
  //   console.log(items);
  //   this.navCtrl.push('PrivateCilentDetailsPage', { data: items })
  // }
  doRefresh(refresher) {
    this.getPrivatClientList();
    this.event.subscribe("request:success", () => {
      this.refresher.complete();
    })
  }
  ionViewWillUnload() {
    //console.log('ionViewWillUnload LogingPage');
    this.event.unsubscribe("request:success");
  }
  getPrivatClientList() {
    try {
      this.storage.get('userInfo').then((data) => {
        this.tokenid = data.tokenid;
        this.httploading.HttpServerLoading("加载中...")
        this.ajaxserve.PrivateClienList({ tokenid: this.tokenid, account_login_id: this.account_login_id }).then((data) => {
          if (data.status.Code = "200") {
            console.log(data);
            this.httploading.ColseServerLoding();
            if (data.data.length !== 0) {
              this.memberList = data.data;
              this.fllowList = data.yfollow;
              this.nofllowList = data.nfollow;
              //console.log(this.memberList);
            }
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
