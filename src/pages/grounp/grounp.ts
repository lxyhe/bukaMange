

import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, NavParams, Events, Refresher } from 'ionic-angular';
import { Storage } from '@ionic/storage';
//import mickData from '../../providers/mickData';
import { HttpLodingService } from '../../providers/loadingServer';
import { ajaxService } from '../../providers/ajaxServe';
/**
 * Generated class for the GrounpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-grounp',
  templateUrl: 'grounp.html',
})
export class GrounpPage {
  @ViewChild(Refresher) public refresher: Refresher;

  public pet: string = "privateClient";
  public tokenid: string = "";
  public team_id: string = "";
  public team_avater: any = "";
  public team_name: any = "";
  public grounpData: object;//上个页面的参数

  public privateClient: object;//私海客户
  public noFoloowUp: object;//未跟进
  public floowUp: object;//已跟进

  public floowUpcount: any;//已跟进客户数量
  public groupMember: any;//团队成员数量
  public privateclients: any;//团队私海客户
  public nofollowUp: any;//未跟进客户

  public groupList: Array<object>;//团队成员
  public privateClientList: Array<object>;//私海客户list
  public fllowClientList: Array<object>;//跟进客户list
  public nofllowClientList: Array<object>;//未跟进客户list


  constructor(
    public navCtrl: NavController,
    public navparam: NavParams,
    public event: Events,
    private storage: Storage,
    public httploading: HttpLodingService,
    public ajaxserve: ajaxService,
  ) {

    this.grounpData = this.navparam.get('data');
    console.log(this.grounpData);
    this.team_id = this.grounpData['team_id'];
    this.groupMember = this.grounpData['acount'];


  }
  doRefresh(refresher) {
    this.getGroupList();
    this.event.subscribe("request:success", () => {
      this.refresher.complete();
    })
  }
  getGroupList() {
    try {
      this.storage.get('userInfo').then((data) => {
        this.tokenid = data.tokenid;
        this.httploading.HttpServerLoading("加载中...")
        this.ajaxserve.grounpList({ tokenid: this.tokenid, team_id: this.team_id }).then((data) => {
          if (data.status.Code = "200") {
            this.httploading.ColseServerLoding();
            // this.companyavatar = data.data.avatar;
            // this.companyname = data.data.name;
            this.groupList = data.data;
            //console.log(this.groupList);
            this.privateClientList = data.clist;
            this.fllowClientList = data.yfollow;
            this.nofllowClientList = data.nfollow;
            // public privateClientList:Array<object>;//私海客户list
            // public fllowClientList:Array<object>;//跟进客户list
            // public nofllowClientList:Array<object>;//未跟进客户list
            //
            this.team_avater = data.leader.account_login_avatar;
            this.team_name = data.leader.account_login_name;
            this.floowUpcount = data.leader.follow;
            this.privateclients = data.leader.clicount;
            //this.floowUpcount = data.leader.account_login_avatar;
            this.nofollowUp = this.privateclients - this.floowUpcount;
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
  ionViewDidEnter() {
    this.getGroupList();
  }
  ionViewWillUnload() {
    //console.log('ionViewWillUnload LogingPage');
    this.event.unsubscribe("request:success");
  }
  goMemberPage(items) {
    console.log(items);
    this.navCtrl.push('MemberPage', { data: items })
  }

}
