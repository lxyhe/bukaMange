
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { homeObj } from '../../providers/homeObj';
//import mickData from '../../providers/mickData';
const mickData: homeObj[] = [
  {
    imgUrl: "assets/imgs/timg1.jpg",
    clientName: "光大传媒",
    clientType: "35人",
    clinetDemand: "大班直播",
    clientTime: "2017-11-27",
    status: 1,
    details: null
  }, {
    imgUrl: "assets/imgs/timg1.jpg",
    clientName: "光大传媒",
    clientType: "35人",
    clinetDemand: "大班直播",
    clientTime: "2017-11-27",
    status: 2,
    details: null
  }, {
    imgUrl: "assets/imgs/timg1.jpg",
    clientName: "光大传媒",
    clientType: "35人",
    clinetDemand: "大班直播",
    clientTime: "2017-11-27",
    status: 2,
    details: null
  }, {
    imgUrl: "assets/imgs/timg1.jpg",
    clientName: "光大传媒",
    clientType: "35人",
    clinetDemand: "大班直播",
    clientTime: "2017-11-27",
    status: 1,
    details: null

  }, {
    imgUrl: "assets/imgs/timg1.jpg",
    clientName: "光大传媒",
    clientType: "35人",
    clinetDemand: "大班直播",
    clientTime: "2017-11-27",
    status: 1,
    details: null
  }
];
@IonicPage()
@Component({
  selector: 'page-company',
  templateUrl: 'company.html',
})
export class CompanyPage {
  public clientList: homeObj[];
  public pet: string = "puppies";
  constructor(public navCtrl: NavController) {

    this.clientList = mickData;
    console.log(this.clientList);
  }
  ionViewDidEnter() {

  }
  goGrounpPage(items) {
    console.log(items);
    this.navCtrl.push('GrounpPage', { data: items })
  }
  goSteingPage(items) {
    console.log(items);
    this.navCtrl.push('HeadSetingPage', { data: items })
  }
}

