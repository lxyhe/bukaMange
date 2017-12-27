import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, NavParams, Events, LoadingController, Refresher, AlertController, App } from 'ionic-angular';
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
  public pageNumber: number;
  public totalNumber: any;
  public noMoreData: boolean = false;
  public noLoading: boolean = true;

  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public navparam: NavParams,
    public event: Events,
    private storage: Storage,
    public httploading: HttpLodingService,
    public ajaxserve: ajaxService,
    public loadingCtrl: LoadingController,
    private app: App

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
          if (data.status.Code == "200") {
            this.httploading.ColseServerLoding();
            this.publicClientList = data.data;
            this.pageNumber = data.cpage;
            this.totalNumber = data.total;

            if (data.data.length == 0) {
              this.isNoData = true;
              this.noLoading = false;
              this.noMoreData = false;
            } else {
              this.isNoData = false;
              this.noLoading = true;
              this.noMoreData = false;
            }

          } else if (data.status.Code == "405") {
            this.httploading.ColseServerLoding();
            let alert = this.alertCtrl.create({
              subTitle: data.status.Msg,
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
          }
        }).catch((err) => {
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
          console.log(err);
        })
      })
    }
    catch (err) {
      console.log(err);
    }

  }
  doInfinite(infiniteScroll) {
    setTimeout(() => {
      this.pageNumber++;
      try {
        this.storage.get('userInfo').then((data) => {
          this.tokenid = data.tokenid;
          this.userid = data.userid;
          this.ajaxserve.publicClientList({ tokenid: this.tokenid, userid: this.userid, cpage: this.pageNumber }).then((data) => {
            if (data.status.Code == "200") {

              // this.publicClientList = data.data;
              Array.prototype.push.apply(this.publicClientList, data.data);
              this.pageNumber = data.cpage;
              this.totalNumber = data.total;
              if (!data.isNext) {
                this.noMoreData = true;
                this.noLoading = false;
              }
              if (data.data.length == 0) {
                this.isNoData = true;
              } else {
                this.isNoData = false;
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
  goPublishDetails(item) {
    let loading = this.loadingCtrl.create({
      content: "加载中 ...",
      dismissOnPageChange: true
    });
    loading.present();
    this.navCtrl.push('ClientDetailspagePage', { details: item })
  }
}
