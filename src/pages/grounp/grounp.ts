

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

  public privatenoData: boolean = false;
  public nofollowUpdata: boolean = false;
  public groupData: boolean = false;
  public followData: boolean = false;


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

  /*分页参数*/
  public pageNumber1: number;
  public totalNumber1: any;
  public noMoreData1: boolean = false;
  public noLoading1: boolean = true;

  public pageNumber2: number;
  public totalNumber2: any;
  public noMoreData2: boolean = false;
  public noLoading2: boolean = true;


  public pageNumber3: number;
  public totalNumber3: any;
  public noMoreData3: boolean = false;
  public noLoading3: boolean = true;

  public pageNumber4: number;
  public totalNumber4: any;
  public noMoreData4: boolean = false;
  public noLoading4: boolean = true;

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
    this.getpravate();
    this.getGroupList();
    this.getnofoollowup();
    this.getfoollowup();

    this.event.subscribe("request:success", () => {
      this.refresher.complete();
    })
  }
  getpravate() {
    try {
      this.storage.get('userInfo').then((data) => {
        this.tokenid = data.tokenid;
        this.httploading.HttpServerLoading("加载中...")
        this.ajaxserve.getPrivateList({ tokenid: this.tokenid, team_id: this.team_id }).then((data) => {
          if (data.status.Code = "200") {
            this.httploading.ColseServerLoding();

            this.privateClientList = data.data;
            if (data.data.length == 0) {
              this.privatenoData = true;
            } else {
              this.privatenoData = false;
            }
            this.pageNumber1 = data.cpage;
            this.totalNumber1 = data.total;
            if (this.pageNumber1 == this.totalNumber1) {
              this.noMoreData1 = true;
              this.noLoading1 = false;
            }
            this.team_avater = data.top.account_login_avatar;
            this.team_name = data.top.account_login_name;

            this.privateclients = data.top.clicount;



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
  getfoollowup() {
    try {
      this.storage.get('userInfo').then((data) => {
        this.tokenid = data.tokenid;
        this.ajaxserve.getfllowUplist({ tokenid: this.tokenid, team_id: this.team_id }).then((data) => {
          if (data.status.Code = "200") {

            this.fllowClientList = data.data;
            this.pageNumber2 = data.cpage;
            this.totalNumber2 = data.total;
            if (data.data.length == 0) {
              this.followData = true;
            } else {
              this.followData = false;
            }
            this.floowUpcount = data.top;

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
  getnofoollowup() {
    try {
      this.storage.get('userInfo').then((data) => {
        this.tokenid = data.tokenid;

        this.ajaxserve.getnofllowUplist({ tokenid: this.tokenid, team_id: this.team_id }).then((data) => {
          if (data.status.Code = "200") {


            this.nofllowClientList = data.data;
            this.pageNumber3 = data.cpage;
            this.totalNumber3 = data.total;
            if (data.data.length == 0) {
              this.nofollowUpdata = true;
            } else {
              this.nofollowUpdata = false;
            }
            this.nofollowUp = data.top;

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
  getGroupList() {
    try {
      this.storage.get('userInfo').then((data) => {
        this.tokenid = data.tokenid;

        this.ajaxserve.grounpList({ tokenid: this.tokenid, team_id: this.team_id }).then((data) => {
          if (data.status.Code = "200") {

            this.groupList = data.data;
            this.pageNumber4 = data.cpage;
            this.totalNumber4 = data.total;
            if (data.data.length == 0) {
              this.groupData = true;
            } else {
              this.groupData = false;
            }
            //this.groupMember = data.top;
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
    this.getpravate();
    this.getGroupList();
    this.getnofoollowup();
    this.getfoollowup();
  }
  ionViewWillUnload() {
    //console.log('ionViewWillUnload LogingPage');
    this.event.unsubscribe("request:success");
  }
  goMemberPage(items) {
    console.log(items);
    this.navCtrl.push('MemberPage', { data: items })
  }
  doInfinite1(infiniteScroll) {
    setTimeout(() => {
      this.pageNumber1++;
      try {
        this.storage.get('userInfo').then((data) => {
          this.tokenid = data.tokenid;

          this.ajaxserve.getPrivateList({ tokenid: this.tokenid, team_id: this.team_id, cpage: this.pageNumber1 }).then((data) => {
            if (data.status.Code = "200") {

              // this.publicClientList = data.data;
              Array.prototype.push.apply(this.privateClientList, data.data);
              this.pageNumber1 = data.cpage;
              this.totalNumber1 = data.total;
              if (this.pageNumber1 == this.totalNumber1) {
                this.noMoreData1 = true;
                this.noLoading1 = false;
              }
              infiniteScroll.complete();
            }
          }).catch((err) => {
            console.log(err);
          })
        })
      }
      catch (err) {
        console.log(err);
      }
    }, 1000)
  }
  doInfinite2(infiniteScroll) {
    setTimeout(() => {
      this.pageNumber2++;
      try {
        this.storage.get('userInfo').then((data) => {
          this.tokenid = data.tokenid;

          this.ajaxserve.getfllowUplist({ tokenid: this.tokenid, team_id: this.team_id, cpage: this.pageNumber2 }).then((data) => {
            if (data.status.Code = "200") {

              // this.publicClientList = data.data;
              Array.prototype.push.apply(this.fllowClientList, data.data);
              this.pageNumber2 = data.cpage;
              this.totalNumber2 = data.total;
              if (this.pageNumber2 == this.totalNumber2) {
                this.noMoreData2 = true;
                this.noLoading2 = false;
              }
              infiniteScroll.complete();
            }
          }).catch((err) => {
            console.log(err);
          })
        })
      }
      catch (err) {
        console.log(err);
      }
    }, 1000)
  }
  doInfinite3(infiniteScroll) {
    setTimeout(() => {
      this.pageNumber3++;
      try {
        this.storage.get('userInfo').then((data) => {
          this.tokenid = data.tokenid;

          this.ajaxserve.getnofllowUplist({ tokenid: this.tokenid, team_id: this.team_id, cpage: this.pageNumber3 }).then((data) => {
            if (data.status.Code = "200") {

              // this.publicClientList = data.data;
              Array.prototype.push.apply(this.nofllowClientList, data.data);
              this.pageNumber3 = data.cpage;
              this.totalNumber3 = data.total;
              if (this.pageNumber3 == this.totalNumber3) {
                this.noMoreData3 = true;
                this.noLoading3 = false;
              }
              infiniteScroll.complete();
            }
          }).catch((err) => {
            console.log(err);
          })
        })
      }
      catch (err) {
        console.log(err);
      }
    }, 1000)
  }
  doInfinite4(infiniteScroll) {
    setTimeout(() => {
      this.pageNumber4++;
      try {
        this.storage.get('userInfo').then((data) => {
          this.tokenid = data.tokenid;
          this.ajaxserve.grounpList({ tokenid: this.tokenid, team_id: this.team_id, cpage: this.pageNumber4 }).then((data) => {
            if (data.status.Code = "200") {
              // this.publicClientList = data.data;
              Array.prototype.push.apply(this.groupList, data.data);
              this.pageNumber4 = data.cpage;
              this.totalNumber4 = data.total;
              if (this.pageNumber4 == this.totalNumber4) {
                this.noMoreData4 = true;
                this.noLoading4 = false;
              }
              infiniteScroll.complete();
            }
          }).catch((err) => {
            console.log(err);
          })
        })
      }
      catch (err) {
        console.log(err);
      }
    }, 1000)
  }
}
