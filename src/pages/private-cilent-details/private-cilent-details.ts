

/**
 * Generated class for the PrivateCilentDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// import { AlertController } from 'ionic-angular';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpLodingService } from '../../providers/loadingServer';
import { ajaxService } from '../../providers/ajaxServe';

export class privateClientDetailsPageOBJ {
  customer_id: any = "未填写";
  customer_avatar: string = "未填写";
  customer_name: string = "未填写";
  customer_type_id: any = "未填写";
  customer_level_id: string = "未填写";
  customer_needs_id: string = "未填写";
  customer_source_id: any = "未填写";
  customer_status_id: any = "未填写";
  customer_address1: string = "未填写";
  customer_address2: string = "";
  customer_remarks: string = "未填写";
  release_time: string = "未填写";
  receive_time: string = "未填写";
  account_login_id: string = "未填写";
  follow: string = "未填写";
  flist: string = "未填写";

}
export class linkCantas {
  customer_contact_id: any;
  customer_contact_name: string;
  customer_contact_position: string;
  customer_contact_email: string;
  customer_contact_tell: string;
  customer_contact_wechat: string;
  customer_id: any;
}
export class addressObj {
  address: string;
  addressDetails: string;
}
@IonicPage()
@Component({
  selector: 'page-private-cilent-details',
  templateUrl: 'private-cilent-details.html',
})
export class PrivateCilentDetailsPage {
  public simpleColumns: any;

  public clientType: Array<object>;
  public clientRank: Array<object>;
  public clientDemand: Array<object>;
  public clientSource: Array<object>;
  public clientStatus: Array<object>;

  public tokenid: string = "";
  public userid: any = "";
  public customer_id: any = "";
  public privateNavParmObj: object;

  public privateClientDetailsPageObj: privateClientDetailsPageOBJ;
  public compluted: string = "完成";
  public editodr: string = "编辑";
  public isDisabled: boolean = false;
  public linkCantacts = {
    customer_contact_id: "未填写",
    name: "未填写",
    post: "未填写",
    email: "未填写",
    phone: "未填写",
    wechat: "未填写",
    customer_id: "未填写",
  }
  public Count_down: string;
  public ClientAddress: addressObj;
  public account_id
  public isfollow: boolean = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private storage: Storage,
    public httploading: HttpLodingService,
    public ajaxserve: ajaxService,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
  ) {
    this.ClientAddress = new addressObj();
    this.ClientAddress.address = "未填写";
    this.ClientAddress.addressDetails = "";
    this.privateClientDetailsPageObj = new privateClientDetailsPageOBJ();
    this.privateNavParmObj = this.navParams.get('data');
    this.userid = this.privateNavParmObj['account_login_id'];
    //console.log(this.privateNavParmObj)

    this.customer_id = this.privateNavParmObj['customer_id'];
    // this.storage.get('userInfo').then((data) => {
    //   this.tokenid = data.tokenid;
    // })
    this.clientType = [
      {
        name: 'col1',
        options: [
          { text: '机构客户', value: '1' },
          { text: '体制客户', value: '2' },
          { text: '个人客户', value: '3' },
          { text: '其他客户', value: '4' }
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
          { text: '大监控', value: '6' },
          { text: '个性定制', value: '7' },

        ]
      }
    ]
    this.clientSource = [
      {
        name: 'col4',
        options: [
          { text: '网站', value: '1' },
          { text: '口碑', value: '2' },
          { text: '电话', value: '3' },
          { text: '活动', value: '4' },
          { text: '其他', value: '5' },
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
          { text: '待激活', value: '4' },
          { text: '其他', value: '5' },
        ]
      }
    ]
    this.getClientDetail();
  }
  goLinkContact() {
    let profileModal = this.modalCtrl.create('LinkModifPage', { 'linkcontacts': this.linkCantacts });
    profileModal.onDidDismiss(data => {
      console.log(data);
      if (data !== undefined) {
        if (data.linkcontacts.name !== "" && data.linkcontacts.name !== 'undefined') {
          this.linkCantacts.name = data.linkcontacts.name;
          this.linkCantacts.email = data.linkcontacts.email;
          this.linkCantacts.phone = data.linkcontacts.phone;
          this.linkCantacts.wechat = data.linkcontacts.wechat;
          this.linkCantacts.post = data.linkcontacts.post;
        } else if (data.linkcontacts.name == 'undefined') {
          this.linkCantacts.name = "未填写"
        } else if (data.linkcontacts.email == 'undefined') {
          this.linkCantacts.email = "未填写";
        }
        else if (data.linkcontacts.phone == 'undefined') {
          this.linkCantacts.phone = "未填写";
        }
        else if (data.linkcontacts.wechat == 'undefined') {
          this.linkCantacts.wechat = "未填写";
        }
        else if (data.linkcontacts.post == 'undefined') {
          this.linkCantacts.post = "未填写";
        }
      }

    });
    profileModal.present();
  }
  ionViewDidEnter() {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PrivateClientDetailspagePage');
  }
  getClientDetail() {
    try {
      this.storage.get('userInfo').then((data) => {
        this.tokenid = data.tokenid;
        // this.userid = data.userid;
        this.httploading.HttpServerLoading("加载中...")
        this.ajaxserve.getClientDetails({ tokenid: this.tokenid, userid: this.userid, customer_id: this.customer_id }).then((data) => {
          if (data.status.Code == "200") {
            this.httploading.ColseServerLoding();

            this.privateClientDetailsPageObj.customer_id = data.data.customer_id;
            this.privateClientDetailsPageObj.customer_avatar = data.data.customer_avatar;
            this.privateClientDetailsPageObj.customer_name = data.data.customer_name;
            this.privateClientDetailsPageObj.customer_type_id = data.data.customer_type_id;
            this.privateClientDetailsPageObj.customer_level_id = data.data.customer_level_id;
            this.privateClientDetailsPageObj.customer_needs_id = data.data.customer_needs_id;
            this.privateClientDetailsPageObj.customer_source_id = data.data.customer_source_id;
            this.privateClientDetailsPageObj.customer_status_id = data.data.customer_status_id;
            this.privateClientDetailsPageObj.customer_address1 = data.data.customer_address1;
            this.privateClientDetailsPageObj.customer_address2 = data.data.customer_address2;
            this.privateClientDetailsPageObj.customer_remarks = data.data.customer_remarks;
            this.privateClientDetailsPageObj.release_time = data.data.release_time;
            this.privateClientDetailsPageObj.receive_time = data.data.receive_time;
            this.privateClientDetailsPageObj.account_login_id = data.data.account_login_id;
            this.privateClientDetailsPageObj.follow = data.data.follow;
            this.privateClientDetailsPageObj.flist = data.data.flist;
            this.Countdown(this.privateClientDetailsPageObj.receive_time);
            //console.log(this.privateClientDetailsPageObj.follow);
            if (Number(this.privateClientDetailsPageObj.follow) <= 0) {
              this.isfollow = true;
            } else {
              this.isfollow = false;
            }
            if (data.data.contact !== null) {
              //  for (var i = 0; i < data.data.clist.length; i++) {
              this.linkCantacts.customer_contact_id = data.contact.customer_contact_id;
              this.linkCantacts.name = data.contact.customer_contact_name;
              this.linkCantacts.post = data.contact.customer_contact_position;
              this.linkCantacts.email = data.contact.customer_contact_email;
              this.linkCantacts.phone = data.contact.customer_contact_tell;
              this.linkCantacts.wechat = data.contact.customer_contact_wechat;
              this.linkCantacts.customer_id = data.contact.customer_id;
              // this.linkCantPageObj.customer_contact_id = data.contact.customer_contact_id;
              //console.log(this.linkCantPageObj);
              // }
            } else {
              this.linkCantacts.customer_contact_id = "未填写";
              this.linkCantacts.name = "未填写";
              this.linkCantacts.post = "未填写";
              this.linkCantacts.email = "未填写";
              this.linkCantacts.phone = "未填写";
              this.linkCantacts.wechat = "未填写";
              this.linkCantacts.customer_id = "未填写";
            }
            // console.log(this.privateClientDetailsPageObj);
            // console.log(this.linkCantacts);
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
  goFloowUP() {
    this.navCtrl.push('PrivateFloowPage', {
      datas: {
        //tokenid: this.tokenid,
        customer_id: this.customer_id,
        avatar: this.privateClientDetailsPageObj.customer_avatar,
        name: this.privateClientDetailsPageObj.customer_name,
        linkCantact: this.linkCantacts.name,
        wechat: this.linkCantacts.wechat,
        phone: this.linkCantacts.phone,
      }
    })
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
            this.moveTopublicSea();
          }
        }
      ]
    });
    alert.present();
  }

  moveTopublicSea() {
    try {
      this.storage.get('userInfo').then((data) => {
        this.tokenid = data.tokenid;
        this.httploading.HttpServerLoading("移动中...")
        this.ajaxserve.moveToPublish({ tokenid: this.tokenid, userid: this.userid, customer_id: this.customer_id }).then((data) => {
          if (data.status.Code == "200") {
            this.httploading.ColseServerLoding();
            //console.log(data);
            //this.httploading.alertServe(data.status.Msg);
            let alert = this.alertCtrl.create({
              subTitle: data.status.Msg,
              buttons: [
                {
                  text: "确定",
                  handler: data => {
                    setTimeout(() => {
                      this.navCtrl.pop();
                    }, 500)
                  }
                }]

            });
            alert.present();

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
  moveTopublicSea1() {
    try {
      this.storage.get('userInfo').then((data) => {
        this.tokenid = data.tokenid;
        this.ajaxserve.moveToPublish({ tokenid: this.tokenid, userid: this.userid, customer_id: this.customer_id }).then((data) => {
          if (data.status.Code == "200") {
            console.log(data);
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
  cilentType(event) {
    console.log(event.col1.value);
    try {
      this.storage.get('userInfo').then((data) => {
        this.tokenid = data.tokenid;
        this.httploading.HttpServerLoading("加载中...")
        this.ajaxserve.modifiterClientType({ tokenid: this.tokenid, customer_type_id: event.col1.value, customer_id: this.customer_id }).then((data) => {
          if (data.status.Code == "200") {
            this.httploading.ColseServerLoding();
            console.log(data);
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
  cilentRank(event) {
    console.log()
    try {
      this.storage.get('userInfo').then((data) => {
        this.tokenid = data.tokenid;
        this.httploading.HttpServerLoading("修改中...")
        this.ajaxserve.modifiterClientLevel({ tokenid: this.tokenid, customer_level_id: event.col2.value, customer_id: this.customer_id }).then((data) => {
          if (data.status.Code == "200") {
            this.httploading.ColseServerLoding();
            console.log(data);
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
  cilentNeed(event) {
    try {
      this.storage.get('userInfo').then((data) => {
        this.tokenid = data.tokenid;
        this.httploading.HttpServerLoading("修改中...")
        this.ajaxserve.modifiterClientNeed({ tokenid: this.tokenid, customer_needs_id: event.col3.value, customer_id: this.customer_id }).then((data) => {
          if (data.status.Code == "200") {
            this.httploading.ColseServerLoding();
            console.log(data);
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
  cilentSoure(event) {
    try {
      this.storage.get('userInfo').then((data) => {
        this.tokenid = data.tokenid;
        this.httploading.HttpServerLoading("修改中...")
        this.ajaxserve.modifiterClientSource({ tokenid: this.tokenid, customer_source_id: event.col4.value, customer_id: this.customer_id }).then((data) => {
          if (data.status.Code == "200") {
            this.httploading.ColseServerLoding();
            console.log(data);
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
  cilentStatus(event) {
    try {
      this.storage.get('userInfo').then((data) => {
        this.tokenid = data.tokenid;
        this.httploading.HttpServerLoading("修改中...")
        this.ajaxserve.modifiterClientStatus({ tokenid: this.tokenid, customer_status_id: event.col5.value, customer_id: this.customer_id }).then((data) => {
          if (data.status.Code == "200") {
            this.httploading.ColseServerLoding();
            console.log(data);
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

  goClientRemark() {
    //let profileModal = this.modalCtrl.create('ClientRemarksPage', { 'remark': this.ClientRemark });
    let profileModal = this.modalCtrl.create('PrivateClientRemarksPage',
      { 'remark': this.privateClientDetailsPageObj.customer_remarks, 'customer': this.customer_id });
    profileModal.onDidDismiss(data => {
      console.log(data);
      if (data !== "undefined") {
        if (data.remark !== "" && data.remark !== 'undefined') {
          //his.isShowRemark = false;
          this.privateClientDetailsPageObj.customer_remarks = data.remark;
        } else if (data.remark == 'undefined') {
          // this.isShowRemark = true;
          this.privateClientDetailsPageObj.customer_remarks = "未填写"
        }
      }
    });
    profileModal.present();
  }
  goClientAddress() {
    let profileModal = this.modalCtrl.create('PrivateClientAddressPage', { 'address': this.privateClientDetailsPageObj });
    //  let profileModal = this.modalCtrl.create('ClientAddressPage');
    profileModal.onDidDismiss(data => {
      console.log(data);
      if (data.address.address !== "" && data.address.address !== 'undefined') {

        this.privateClientDetailsPageObj.customer_address1 = data.address.address;
        this.privateClientDetailsPageObj.customer_address2 = data.address.addressDetails;
      } else if (data.address.address == 'undefined') {
        //this.isShowAddress = true;
        this.privateClientDetailsPageObj.customer_address1 = "未填写";
        this.privateClientDetailsPageObj.customer_address2 = "未填写";
      }

    });
    profileModal.present();
  }
  Countdown(date_item) {
    // var data_item1 = "2017-12-30 11:35:53";
    var date = new Date(date_item).getTime();//注册时间
    var date1 = new Date().getTime();//现在时间
    var date2 = new Date(date + 15 * 24 * 3600 * 1000).getTime();//15天后的时间
    var second = Math.floor((date2 - date1) / 1000);
    console.log(second);
    if (second > 0) {
      var day = Math.floor(second / 86400);//整数部分代表的是天；一天有24*60*60=86400秒 ；
      second = second % 86400;//余数代表剩下的秒数；
      var hour = Math.floor(second / 3600);//整数部分代表小时；
      second %= 3600; //余数代表 剩下的秒数；
      var minute = Math.floor(second / 60);
      second %= 60;
      // var min = Math.floor(second / 60);
      // second %= 60;
      this.Count_down = day + "天" + hour + "小时" + minute + "分钟";

      console.log(this.Count_down);
    } else {
      this.Count_down = "您的15天倒计时已到"
      let alert = this.alertCtrl.create({
        subTitle: '您的客户15天内未跟进,将移动公海,请至公海领取!',
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
              this.moveTopublicSea1();
              this.navCtrl.pop();
            }
          }
        ]
      });
      alert.present();


    }
  }
}

