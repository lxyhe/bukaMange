import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, NavParams, Events, Refresher } from 'ionic-angular';
import { homeObj } from '../../providers/homeObj';
import { Storage } from '@ionic/storage';
//import mickData from '../../providers/mickData';

//import mickData from '../../providers/mickData';
import { HttpLodingService } from '../../providers/loadingServer';
import { ajaxService } from '../../providers/ajaxServe';
enum Direction {
  companyType = 1,
  grounpType,
  personType
}

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Refresher) public refresher: Refresher;
  public clientList: homeObj[];
  public pet: string = "privateClient";
  public tokenid: string = "";
  public userid: any = "";
  public roleid: any = "";
  public isRoleid: boolean = false;

  public privatenoData: boolean = false;
  public nofollowUp: boolean = false;
  public groupData: boolean = false;
  public followData: boolean = false;

  public groupList: Array<object>;//团队成员
  public privateClientList: Array<object>;//私海客户list
  public fllowClientList: Array<object>;//跟进客户list
  public nofllowClientList: Array<object>;//未跟进客户list

  public avatarUrl: string = "";
  public name: string = "";
  public follow: any = "";
  public privateCilent: any = "";
  public grounp: any = "";
  public nofollow: any = "";
  public pensetingData: object;

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
    //this.clientList = mickData;

  }
  ionViewDidEnter() {
    //this.getUserType();
    this.getPrivateClientList();
  }
  doRefresh(refresher) {
    this.getPrivateClientList();

    this.event.subscribe("request:success", () => {
      this.refresher.complete();
    })
  }
  getPrivateClientList() {

    this.storage.get('userInfo').then((data) => {
      this.tokenid = data.tokenid;//token
      this.userid = data.userid;//用户ID
      if (data.roleid == Direction.grounpType) {
        this.isRoleid = false;
        this.getPrivateList();
        this.getfollowList();
        this.getnofollowList();
        this.getGroupList();

      } else if (data.roleid == Direction.personType) {
        this.isRoleid = true;
        this.getPrivateList();
        this.getfollowList();
        this.getnofollowList();

        //this.getGroupList();
        console.log(this.isRoleid);
      }

    }).catch(err => {
      console.log(err);
    })

  }

  getPrivateList() {
    try {
      this.storage.get('userInfo').then((data) => {
        this.httploading.HttpServerLoading("加载中...")
        this.tokenid = data.tokenid;//token
        this.userid = data.userid;//用户ID

        this.ajaxserve.inspectorGroupprivateList({ tokenid: this.tokenid, userid: this.userid }).then((data) => {
          if (data.status.Code = "200") {
            console.log(data);
            this.httploading.ColseServerLoding();

            this.privateClientList = data.data;
            if (data.data.length == 0) {
              this.privatenoData = true;
            } else {
              this.privatenoData = false;
            }
            this.pageNumber1 = data.cpage;
            this.totalNumber1 = data.total;
            // if (data.isNext) {
            //   this.noMoreData1 = false;
            //   this.noLoading1 = true;
            // } else {
            //   this.noMoreData1 = true;
            //   this.noLoading1 = false;

            // }


            this.pensetingData = data.top;

            this.avatarUrl = data.top.account_login_avatar;
            this.name = data.top.account_login_name;




            this.privateCilent = data.top.clicount;


          }
        })

      }).catch(err => {
        this.httploading.ColseServerLoding();
        alert(err);
      })
    }
    catch (err) {
      console.log(err);
    }
  }

  getfollowList() {
    try {
      this.storage.get('userInfo').then((data) => {

        this.tokenid = data.tokenid;//token
        this.userid = data.userid;//用户ID

        this.ajaxserve.inspectorfoloow({ tokenid: this.tokenid, userid: this.userid }).then((data) => {
          if (data.status.Code = "200") {
            console.log(data);

            //     this.groupList = data.customer;
            //     this.privateClientList = data.customer;
            //     this.fllowClientList = data.yfollow;
            //     this.nofllowClientList = data.nfollow;
            this.fllowClientList = data.data;
            if (data.data.length == 0) {
              this.followData = true;
            } else {
              this.followData = false;
            }
            this.pageNumber2 = data.cpage;
            this.totalNumber2 = data.total;
            this.follow = data.top;



          }
        })
      }).catch(err => {
        this.httploading.ColseServerLoding();
        alert(err);
      })
    }
    catch (err) {
      console.log(err);
    }
  }
  getnofollowList() {
    try {
      this.storage.get('userInfo').then((data) => {

        this.tokenid = data.tokenid;//token
        this.userid = data.userid;//用户ID

        this.ajaxserve.inspectornofoloow({ tokenid: this.tokenid, userid: this.userid }).then((data) => {
          if (data.status.Code = "200") {
            console.log(data);
            this.nofllowClientList = data.data;
            if (data.data.length == 0) {
              this.nofollowUp = true;
            } else {
              this.nofollowUp = false;
            }
            this.pageNumber3 = data.cpage;
            this.totalNumber3 = data.total;
            // public privatenoData: boolean = false;
            // public nofollowUp: boolean = false;
            // public groupData: boolean = false;
            // public followData: boolean = false;
            this.nofollow = data.top;
          }
        })
      }).catch(err => {
        this.httploading.ColseServerLoding();
        alert(err);
      })
    }
    catch (err) {
      console.log(err);
    }
  }
  getGroupList() {
    try {
      this.storage.get('userInfo').then((data) => {
        this.tokenid = data.tokenid;//token
        this.userid = data.userid;//用户ID

        this.ajaxserve.inspectorGrouList({ tokenid: this.tokenid, userid: this.userid }).then((data) => {
          if (data.status.Code = "200") {
            console.log(data);
            this.groupList = data.data;
            if (data.data.length == 0) {
              this.groupData = true;
            } else {
              this.groupData = false;
            }
            this.pageNumber4 = data.cpage;
            this.totalNumber4 = data.total;
            this.grounp = data.top;

          }
        })
      }).catch(err => {
        this.httploading.ColseServerLoding();
        alert(err);
      })
    }
    catch (err) {
      console.log(err);
    }
  }

  goClientDetails(items) {

    this.navCtrl.push('PrivateCilentDetailsPage', { data: items })
  }
  goPensonSeting() {
    this.navCtrl.push('PersonSetingPage', { 'data': this.pensetingData });
  }
  goMemberPage(items) {

    this.navCtrl.push('MemberPage', { data: items })
  }

  /**/
  doInfinite1(infiniteScroll) {
    setTimeout(() => {
      this.pageNumber1++;
      try {
        this.storage.get('userInfo').then((data) => {
          this.tokenid = data.tokenid;
          this.userid = data.userid;
          this.ajaxserve.inspectorGroupprivateList({ tokenid: this.tokenid, userid: this.userid, cpage: this.pageNumber1 }).then((data) => {
            if (data.status.Code = "200") {

              // this.publicClientList = data.data;
              Array.prototype.push.apply(this.privateClientList, data.data);
              this.pageNumber1 = data.cpage;
              this.totalNumber1 = data.total;

              if (!data.isNext) {
                this.noMoreData1 = true;
                this.noLoading1 = false;
              }
              infiniteScroll.complete();
            }
          }).catch((err) => {
            this.httploading.ColseServerLoding();
            alert(err);
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
          this.userid = data.userid;
          this.ajaxserve.inspectorfoloow({ tokenid: this.tokenid, userid: this.userid, cpage: this.pageNumber2 }).then((data) => {
            if (data.status.Code = "200") {

              // this.publicClientList = data.data;
              Array.prototype.push.apply(this.fllowClientList, data.data);
              this.pageNumber2 = data.cpage;
              this.totalNumber2 = data.total;
              // if (this.pageNumber2 == this.totalNumber2) {
              //   this.noMoreData2 = true;
              //   this.noLoading2 = false;
              // }
              if (!data.isNext) {
                this.noMoreData2 = true;
                this.noLoading2 = false;
              }
              infiniteScroll.complete();
            }
          }).catch((err) => {
            this.httploading.ColseServerLoding();
            alert(err);
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
          this.userid = data.userid;
          this.ajaxserve.inspectornofoloow({ tokenid: this.tokenid, userid: this.userid, cpage: this.pageNumber3 }).then((data) => {
            if (data.status.Code = "200") {

              // this.publicClientList = data.data;
              Array.prototype.push.apply(this.nofllowClientList, data.data);
              this.pageNumber3 = data.cpage;
              this.totalNumber3 = data.total;
              // if (this.pageNumber3 == this.totalNumber3) {
              //   this.noMoreData3 = true;
              //   this.noLoading3 = false;
              // }
              if (!data.isNext) {
                this.noMoreData3 = true;
                this.noLoading3 = false;
              }
              infiniteScroll.complete();
            }
          }).catch((err) => {
            this.httploading.ColseServerLoding();
            alert(err);
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
          this.userid = data.userid;
          this.ajaxserve.inspectorGrouList({ tokenid: this.tokenid, userid: this.userid, cpage: this.pageNumber4 }).then((data) => {
            if (data.status.Code = "200") {

              // this.publicClientList = data.data;
              Array.prototype.push.apply(this.groupList, data.data);
              this.pageNumber4 = data.cpage;
              this.totalNumber4 = data.total;
              // if (this.pageNumber4 == this.totalNumber4) {
              //   this.noMoreData4 = true;
              //   this.noLoading4 = false;
              // }
              if (!data.isNext) {
                this.noMoreData4 = true;
                this.noLoading4 = false;
              }
              infiniteScroll.complete();
            }
          }).catch((err) => {
            this.httploading.ColseServerLoding();
            alert(err);
          })
        })
      }
      catch (err) {
        console.log(err);
      }
    }, 1000)
  }
}
