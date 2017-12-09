import { Component } from '@angular/core';

import { NavController, IonicPage } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  public clientList: Array<object> = [];
  public searcheMemo: string = '123';
  public pet: string = "puppies";
  public Serach: string = "SerachPage";
  public details: string = "ClientDetailspagePage";
  public detailsInfo: string = "西八";
  constructor(public navCtrl: NavController) {

    this.clientList = [{
      imgUrl: "assets/imgs/timg1.jpg",
      clientName: "光大传媒",
      clientType: "机构客户",
      clinetDemand: "大班直播",
      clientTime: "2017-11-27",
      status: "1"
    }, {
      imgUrl: "assets/imgs/timg1.jpg",
      clientName: "光大传媒",
      clientType: "机构客户",
      clinetDemand: "大班直播",
      clientTime: "2017-11-27",
      status: "2"
    }, {
      imgUrl: "assets/imgs/timg1.jpg",
      clientName: "光大传媒",
      clientType: "机构客户",
      clinetDemand: "大班直播",
      clientTime: "2017-11-27",
      status: "2"
    }, {
      imgUrl: "assets/imgs/timg1.jpg",
      clientName: "光大传媒",
      clientType: "机构客户",
      clinetDemand: "大班直播",
      clientTime: "2017-11-27",
      status: "1"
    }, {
      imgUrl: "assets/imgs/timg1.jpg",
      clientName: "光大传媒",
      clientType: "机构客户",
      clinetDemand: "大班直播",
      clientTime: "2017-11-27",
      status: "1"
    }]
  }
  ionViewDidEnter() {

  }

}
