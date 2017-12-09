import { Component } from '@angular/core';

import { NavController, IonicPage } from 'ionic-angular';

import { homeObj } from './homeObj';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public clientList: Array<object> = [];
  public pet: string = "puppies";
  constructor(public navCtrl: NavController) {
    this.clientList = [{
      imgUrl: "assets/imgs/timg.jpg",
      clientName: "光大传媒",
      clientType: "机构客户",
      clinetDemand: "大班直播",
      clientTime: "2017-11-27",
      status: "1"
    }, {
      imgUrl: "assets/imgs/timg.jpg",
      clientName: "光大传媒",
      clientType: "机构客户",
      clinetDemand: "大班直播",
      clientTime: "2017-11-27",
      status: "2"
    }, {
      imgUrl: "assets/imgs/timg.jpg",
      clientName: "光大传媒",
      clientType: "机构客户",
      clinetDemand: "大班直播",
      clientTime: "2017-11-27",
      status: "2"
    }, {
      imgUrl: "assets/imgs/timg.jpg",
      clientName: "光大传媒",
      clientType: "机构客户",
      clinetDemand: "大班直播",
      clientTime: "2017-11-27",
      status: "1"
    }, {
      imgUrl: "assets/imgs/timg.jpg",
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
