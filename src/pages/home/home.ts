import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams, Events } from 'ionic-angular';
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
  public clientList: homeObj[];
  public pet: string = "privateClient";
  public tokenid: string = "";
  public userid: any = "";
  public roleid: any = "";
  public isRoleid: boolean = false;
  public isNoData: boolean = false;

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
  getPrivateClientList() {
    try {
      this.storage.get('userInfo').then((data) => {
        this.httploading.HttpServerLoading("加载中...")
        this.tokenid = data.tokenid;//token
        this.userid = data.userid;//用户ID

        if (data.roleid == Direction.grounpType) {
          this.isRoleid = false;
          this.ajaxserve.inspectorGroupList({ tokenid: this.tokenid, userid: this.userid }).then((data) => {
            if (data.status.Code = "200") {
              console.log(data);
              this.httploading.ColseServerLoding();
              this.groupList = data.member;
              this.privateClientList = data.clist;
              if (data.clist.length == 0) {
                this.isNoData = true;
              } else {
                this.isNoData = false;
              }
              this.fllowClientList = data.yfollow;
              this.nofllowClientList = data.nfollow;
              /** */
              this.grounp = data.leader.count;
              this.avatarUrl = data.leader.account_login_avatar;
              this.name = data.leader.account_login_name;
              this.follow = data.leader.follow;
              this.privateCilent = data.leader.clicount;
              this.nofollow = this.privateCilent - this.follow;

            }
          })

        } else if (data.roleid == Direction.personType) {
          this.isRoleid = true;
          this.ajaxserve.personClientList({ tokenid: this.tokenid, userid: this.userid }).then((data) => {
            if (data.status.Code = "200") {
              console.log(data);
              this.httploading.ColseServerLoding();
              //this.groupList = data.customer;
              this.privateClientList = data.customer;
              if (data.customer.length == 0) {
                this.isNoData = true;
              } else {
                this.isNoData = false;
              }
              this.fllowClientList = data.yfollow;
              this.nofllowClientList = data.nfollow;



              this.avatarUrl = data.account.account_login_avatar;
              this.name = data.account.account_login_name;
              this.follow = data.account.follow;
              this.privateCilent = data.account.clicount;
              this.nofollow = this.privateCilent - this.follow;
            }
          })

        }



      }).catch(err => {
        console.log(err);
      })
    }
    catch (err) {
      console.log(err);
    }
  }
  //判断用户的角色
  // getUserType() {
  //   this.storage.get('userInfo').then((data) => {

  //   })
  // }
  goClientDetails(items) {
    console.log(items);
    this.navCtrl.push('PrivateCilentDetailsPage', { data: items })
  }
  goPensonSeting() {
    this.navCtrl.push('PersonSetingPage', );
  }
  goMemberPage(items) {
    console.log(items);
    this.navCtrl.push('MemberPage', { data: items })
  }

}
