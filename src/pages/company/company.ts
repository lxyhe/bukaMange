
import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, Refresher, Events } from 'ionic-angular';
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

  constructor(
    public navCtrl: NavController,
    public httploading: HttpLodingService,
    private storage: Storage,
    public ajaxserve: ajaxService,
    public event: Events

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
    this.getcompanyList();
    //this.doRefresh();
  }
  goGrounpPage(items) {
    this.navCtrl.push('GrounpPage', { data: items })
  }
  goSteingPage(items) {
    console.log(items);
    this.navCtrl.push('HeadSetingPage', { data: items })
  }
}

