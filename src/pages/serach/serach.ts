
/**
 * Generated class for the SerachPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


import { Component } from '@angular/core';

import { IonicPage, NavController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-serach',
  templateUrl: 'serach.html',
})
export class SerachPage {
  public clientList: Array<object> = [];
  public searcheMemo: string = '123';
  public pet: string = "puppies";
  public Serach: string = "SerachPage";
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

