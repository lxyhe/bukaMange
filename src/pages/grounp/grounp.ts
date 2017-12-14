

import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, NavParams, Events, Refresher } from 'ionic-angular';
import { homeObj } from '../../providers/homeObj';
import { Storage } from '@ionic/storage';
//import mickData from '../../providers/mickData';

/**
 * Generated class for the GrounpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

const mickData: homeObj[] = [
  {
    imgUrl: "assets/imgs/timg1.jpg",
    clientName: "光大传媒",
    clientType: "35人",
    clinetDemand: "大班直播",
    clientTime: "2017-11-27",
    status: 1,
    details: null
  }, {
    imgUrl: "assets/imgs/timg1.jpg",
    clientName: "光大传媒",
    clientType: "35人",
    clinetDemand: "大班直播",
    clientTime: "2017-11-27",
    status: 2,
    details: null
  }, {
    imgUrl: "assets/imgs/timg1.jpg",
    clientName: "光大传媒",
    clientType: "35人",
    clinetDemand: "大班直播",
    clientTime: "2017-11-27",
    status: 2,
    details: null
  }, {
    imgUrl: "assets/imgs/timg1.jpg",
    clientName: "光大传媒",
    clientType: "35人",
    clinetDemand: "大班直播",
    clientTime: "2017-11-27",
    status: 1,
    details: null

  }, {
    imgUrl: "assets/imgs/timg1.jpg",
    clientName: "光大传媒",
    clientType: "35人",
    clinetDemand: "大班直播",
    clientTime: "2017-11-27",
    status: 1,
    details: null
  }
];
@IonicPage()
@Component({
  selector: 'page-grounp',
  templateUrl: 'grounp.html',
})
export class GrounpPage {
  @ViewChild(Refresher) public refresher: Refresher;
  public clientList: homeObj[];
  public pet: string = "puppies";
  public tokenid: string = "";
  public team_id: string = "";
  public companyData: object = {};
  constructor(
    public navCtrl: NavController,
    public navparam: NavParams,
    public event: Events,
    private storage: Storage,
  ) {
    this.clientList = mickData;
    this.companyData = this.navparam.get('data');
    console.log(this.companyData);
    // this.team_id=this.companyData.team_id;
  }
  doRefresh(refresher) {
    this.getcompanyList();
    this.event.subscribe("request:success", () => {
      this.refresher.complete();
    })
  }
  getcompanyList() {
    try {
      this.storage.get('userInfo').then((data) => {
        this.tokenid = data.tokenid;
        this.httploading.HttpServerLoading("加载中...")
        this.ajaxserve.companyList({ tokenid: this.tokenid, userid: this.userid }).then((data) => {
          console.log(data);
          if (data.status.Code = "200") {
            this.httploading.ColseServerLoding();
            this.companyavatar = data.data.avatar;
            this.companyname = data.data.name;
            this.clientList = data.data.tlist;
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

  }
  goMemberPage(items) {
    console.log(items);
    this.navCtrl.push('MemberPage', { data: items })
  }

}
