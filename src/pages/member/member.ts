
import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, NavParams, Events, Refresher } from 'ionic-angular';
import { Storage } from '@ionic/storage';
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

  public privatenoData: boolean = false;
  public nofollowUpdata: boolean = false;
  public groupData: boolean = false;
  public followData: boolean = false;
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
    // this.clicount = this.memberData['clicount'];
    // this.follow = this.memberData['follow'];
    // this.nofollow = this.clicount - this.follow;
  }
  ionViewDidEnter() {
    this.getPrivatClientList();
    this.getfollowList();
    this.getnofollowList();
  }
  // goClientDetails(items) {
  //   console.log(items);
  //   this.navCtrl.push('PrivateCilentDetailsPage', { data: items })
  // }
  doRefresh(refresher) {
    this.getPrivatClientList();
    this.getfollowList();
    this.getnofollowList();
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
              // this.fllowList = data.yfollow;
              // this.nofllowList = data.nfollow;
              //console.log(this.memberList);
              this.clicount = data.top;
            }
            if (data.data.length == 0) {
              this.privatenoData = true;
            } else {
              this.privatenoData = false;
            }
            this.pageNumber1 = data.cpage;
            this.totalNumber1 = data.total;
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
  getfollowList() {
    try {
      this.storage.get('userInfo').then((data) => {
        this.tokenid = data.tokenid;

        this.ajaxserve.getMemberfollow({ tokenid: this.tokenid, account_login_id: this.account_login_id }).then((data) => {
          if (data.status.Code = "200") {
            console.log(data);
            if (data.data.length !== 0) {
              // this.memberList = data.data;
              this.fllowList = data.data;
              this.follow = data.top;
              //
              // this.nofllowList = data.nfollow;
              //console.log(this.memberList);

            }
            if (data.data.length == 0) {
              this.followData = true;
            } else {
              this.followData = false;
            }
            this.pageNumber2 = data.cpage;
            this.totalNumber2 = data.total;
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
  getnofollowList() {
    try {
      this.storage.get('userInfo').then((data) => {
        this.tokenid = data.tokenid;

        this.ajaxserve.getMembernofollow({ tokenid: this.tokenid, account_login_id: this.account_login_id }).then((data) => {
          if (data.status.Code = "200") {
            console.log(data);

            if (data.data.length !== 0) {
              // this.memberList = data.data;
              // this.fllowList = data.yfollow;
              this.nofllowList = data.data;
              this.nofollow = data.top;
              //console.log(this.memberList);

            }
            if (data.data.length == 0) {
              this.nofollowUpdata = true;
            } else {
              this.nofollowUpdata = false;
            }
            this.pageNumber3 = data.cpage;
            this.totalNumber3 = data.total;
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
  doInfinite1(infiniteScroll) {
    setTimeout(() => {
      this.pageNumber1++;
      try {
        this.storage.get('userInfo').then((data) => {
          this.tokenid = data.tokenid;

          this.ajaxserve.PrivateClienList({ tokenid: this.tokenid, account_login_id: this.account_login_id, cpage: this.pageNumber1 }).then((data) => {
            if (data.status.Code = "200") {
              // this.publicClientList = data.data;
              Array.prototype.push.apply(this.memberList, data.data);
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

          this.ajaxserve.getMemberfollow({ tokenid: this.tokenid, account_login_id: this.account_login_id, cpage: this.pageNumber2 }).then((data) => {
            if (data.status.Code = "200") {

              // this.publicClientList = data.data;
              Array.prototype.push.apply(this.fllowList, data.data);
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
          this.ajaxserve.getMembernofollow({ tokenid: this.tokenid, account_login_id: this.account_login_id, cpage: this.pageNumber3 }).then((data) => {
            if (data.status.Code = "200") {
              // this.publicClientList = data.data;
              Array.prototype.push.apply(this.nofllowList, data.data);
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
}
