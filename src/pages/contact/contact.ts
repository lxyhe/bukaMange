import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, NavParams, Events, LoadingController, Refresher } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpLodingService } from '../../providers/loadingServer';
import { ajaxService } from '../../providers/ajaxServe';

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  @ViewChild(Refresher) public refresher: Refresher;
  public clientList: Array<object> = [];
  public searcheMemo: string = '123';
  public pet: string = "puppies";
  public Serach: string = "SerachPage";
  public details: string = "ClientDetailspagePage";
  public detailsInfo: string = "西八";
  public tokenid: string = "";
  public userid: any = "";
  public isNoData: boolean = true;
  public publicClientList: Array<object>;
  constructor(
    public navCtrl: NavController,
    public navparam: NavParams,
    public event: Events,
    private storage: Storage,
    public httploading: HttpLodingService,
    public ajaxserve: ajaxService,
    public loadingCtrl: LoadingController,

  ) {

  }
  ionViewDidEnter() {
    this.getPublicList();
  }
  doRefresh(refresher) {
    this.getPublicList();
    this.event.subscribe("request:success", () => {
      this.refresher.complete();
    })
  }
  getPublicList() {
    try {
      this.storage.get('userInfo').then((data) => {
        this.tokenid = data.tokenid;
        this.userid = data.userid;
        this.httploading.HttpServerLoading("加载中...")
        this.ajaxserve.publicClientList({ tokenid: this.tokenid, userid: this.userid }).then((data) => {
          if (data.status.Code = "200") {
            this.httploading.ColseServerLoding();
            this.publicClientList = data.data;
            if (data.data.length == 0) {
              this.isNoData = true;
            } else {
              this.isNoData = false;
            }
            //  console.log(data);
            // this.companyavatar = data.data.avatar;
            // this.companyname = data.data.name;

            //console.log(this.groupList);
            // this.privateClientList = data.clist;
            // this.fllowClientList = data.yfollow;
            // this.nofllowClientList = data.nfollow;
            // public privateClientList:Array<object>;//私海客户list
            // public fllowClientList:Array<object>;//跟进客户list
            // public nofllowClientList:Array<object>;//未跟进客户list
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
  goPublishDetails(item) {
    let loading = this.loadingCtrl.create({
      content: "加载中 ...",
      dismissOnPageChange: true
    });
    loading.present();
    this.navCtrl.push('ClientDetailspagePage', { details: item })
  }
}
