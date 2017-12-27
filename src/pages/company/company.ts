
import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, Refresher, Events, AlertController, App } from 'ionic-angular';
import { homeObj } from '../../providers/homeObj';
import { HttpLodingService } from '../../providers/loadingServer';
import { Storage } from '@ionic/storage';
import { ajaxService } from '../../providers/ajaxServe';
//import mickData from '../../providers/mickData';

@IonicPage()
@Component({
  selector: 'page-company',
  templateUrl: 'company.html',
})
export class CompanyPage {
  @ViewChild(Refresher) public refresher: Refresher;
  public clientList: homeObj[];
  public pet: string = "puppies";
  public userid: any = "";
  public tokenid: any = "";

  public companyavatar: string = "";
  public companyname: any = "";
  public pageNumber: any;
  public noMoreData: boolean = false;
  public isShowInfinite: boolean = true;
  public groudData: boolean = false;
  constructor(
    public navCtrl: NavController,
    public httploading: HttpLodingService,
    private storage: Storage,
    public ajaxserve: ajaxService,
    public event: Events,
    public alertCtrl: AlertController,
    private app: App
  ) {

    //this.clientList = mickData;
    // console.log(this.clientList);
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
        this.userid = data.userid;
        this.tokenid = data.tokenid;
        this.httploading.HttpServerLoading("加载中...")
        this.ajaxserve.companyList({ tokenid: this.tokenid, userid: this.userid }).then((data) => {
          console.log(data);
          if (data.status.Code == "200") {
            this.httploading.ColseServerLoding();
            if (data.data.tlist.length !== 0) {
              this.companyavatar = data.data.avatar;
              this.companyname = data.data.name;
              this.clientList = data.data.tlist;

            } else {
              console.log("list=0")
            }
          }
        }).catch((err) => {

          this.httploading.ColseServerLoding();
          let alert = this.alertCtrl.create({
            subTitle: err.status.Msg,
            buttons: [
              {
                text: "确定",
                handler: data => {
                  setTimeout(() => {
                    this.app.getRootNav().setRoot('LogingPage')
                  }, 1000);
                }
              }]

          });
          alert.present();
        })
      })
    }
    catch (err) {
      console.log(err);
    }
  }
  ionViewDidEnter() {
    this.getcompanyList();
    //this.doRefresh();
  }
  ionViewWillUnload() {
    //console.log('ionViewWillUnload LogingPage');
    this.event.unsubscribe("request:success");
  }
  goGrounpPage(items) {
    this.navCtrl.push('GrounpPage', { data: items })
  }
  goSteingPage() {
    this.navCtrl.push('HeadSetingPage', { 'data': this.companyavatar })
  }
  doInfinite(infiniteScroll) {
    this.pageNumber++;
    setTimeout(() => {
      try {
        this.storage.get('userInfo').then((data) => {
          this.userid = data.userid;
          this.tokenid = data.tokenid;
          this.httploading.HttpServerLoading("加载中...")
          this.ajaxserve.companyList({ tokenid: this.tokenid, userid: this.userid, cpage: this.pageNumber }).then((data) => {
            console.log(data);
            if (data.status.Code == "200") {
              this.httploading.ColseServerLoding();
              if (data.data.tlist.length !== 0) {
                this.groudData = false;
                this.companyavatar = data.data.avatar;
                this.companyname = data.data.name;

                this.clientList = data.data.tlist;
                if (data.isNext) {

                  this.noMoreData = false;
                  this.isShowInfinite = true;
                  Array.prototype.push.apply(this.clientList, data.data.tlist);
                } else if (!data.isNext) {
                  Array.prototype.push.apply(this.clientList, data.data.tlist);
                  this.isShowInfinite = false;
                  this.noMoreData = true;
                }


              } else {
                console.log("list=0")
                this.groudData = true;
              }

            }
          }).catch((err) => {
            this.httploading.ColseServerLoding();
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

