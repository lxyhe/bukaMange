

/**
 * Generated class for the PrivateCilentDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// import { AlertController } from 'ionic-angular';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-private-cilent-details',
  templateUrl: 'private-cilent-details.html',
})
export class PrivateCilentDetailsPage {
  public simpleColumns: any;
  public default: any = 2;
  public Privatedetails: any = "PrivateFloowPage";
  public privatedetailsInfo: Object;
  public clientType: Array<object>;
  public clientRank: Array<object>;
  public clientDemand: Array<object>;
  public clientSource: Array<object>;
  public clientStatus: Array<object>;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController

  ) {
    this.clientType = [
      {
        name: 'col1',
        options: [
          { text: '机构客户', value: '1' },
          { text: '体制客户', value: '2' },
          { text: '个人客户', value: '3' },
          { text: '其他客户', value: '3' }
        ]
      }
    ];
    this.clientRank = [
      {
        name: 'col2',
        options: [
          { text: '刚需', value: '1' },
          { text: '调研', value: '2' },
          { text: '了解', value: '3' },
        ]
      }
    ];
    this.clientDemand = [
      {
        name: 'col3',
        options: [
          { text: '大班直播', value: '1' },
          { text: '小班互动', value: '2' },
          { text: '双师', value: '3' },
          { text: 'SDK', value: '4' },
          { text: '换LOGO', value: '5' },
        ]
      }
    ]
    this.clientSource = [
      {
        name: 'col4',
        options: [
          { text: '网站', value: '1' },
          { text: '待激活', value: '2' },
          { text: '活动', value: '3' },
          { text: '其他', value: '4' },
        ]
      }
    ]
    this.clientStatus = [
      {
        name: 'col5',
        options: [
          { text: '体验了解', value: '1' },
          { text: '已签约', value: '2' },
          { text: '切换人', value: '3' },
        ]
      }
    ]
    this.simpleColumns = [
      {
        name: 'col1',
        options: [
          { text: '1', value: '1' },
          { text: '2', value: '2' },
          { text: '3', value: '3' }
        ]
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrivateClientDetailspagePage');
  }
  moveToHighSeas() {
    let alert = this.alertCtrl.create({
      subTitle: '客户资料移至公海你将丢失客户信息确定将客户资料移至公海吗？',
      cssClass: 'alertStyle',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '确定',
          handler: () => {
            console.log('Buy clicked');
          }
        }
      ]
    });
    alert.present();
  }
  cilentType(e) {
    console.log(e);
  }

}

