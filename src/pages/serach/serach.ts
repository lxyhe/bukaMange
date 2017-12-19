
/**
 * Generated class for the SerachPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


import { Component } from '@angular/core';

import { IonicPage, NavController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

//import mickData from '../../providers/mickData';
import { HttpLodingService } from '../../providers/loadingServer';
import { ajaxService } from '../../providers/ajaxServe';

// export class CustomeOBJ {
//   customer_id: 41,
//   customer_avatar: null,
//   customer_name: "客户41",
//   customer_type_id: 1,
//   customer_level_id: 2,
//   customer_needs_id: 6,
//   customer_source_id": 1,
//   customer_status_id": 1,
//   customer_address1": null,
//   customer_address2": null,
//   customer_remarks": null,
//   release_time": "2017-11 - 24 07: 32:20",
//   receive_time": null,
//   account_login_id": 0,
//   follow": null
// }

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
  public tokenid: string = "";
  public queryText: string = "";
  public customerObj: object;
  public customerObjLen: number = 0;
  public isShow: boolean = false;
  constructor(
    public navCtrl: NavController,
    // public navparam: NavParams,
    // public event: Events,
    private storage: Storage,
    public httploading: HttpLodingService,
    public ajaxserve: ajaxService,
    public loadingCtrl: LoadingController
  ) {

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
    document.onkeydown = (k) => {
      if (k.keyCode == 13) {
        this.publicSerachlist();
        return false
      }
    }
  }
  publicSerachlist() {
    try {
      this.storage.get('userInfo').then((data) => {
        this.tokenid = data.tokenid;
        this.httploading.HttpServerLoading("搜索中...")
        this.ajaxserve.publicSearch({ tokenid: this.tokenid, cname: this.queryText }).then((data) => {
          if (data.status.Code = "200") {
            this.httploading.ColseServerLoding();
            console.log(data);
            this.customerObj = data.data;
            this.customerObjLen = data.data.length;
            this.isShow = true;
            // if (data.status.Msg = "未输入搜索内容") {
            //   this.customerObjLen = 0;
            // }
          } else {
            this.isShow = false;
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

