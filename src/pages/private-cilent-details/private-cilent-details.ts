

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
  public linkCantPageObj = {
    customer_contact_id: "未填写",
    customer_contact_name: "未填写",
    customer_contact_position: "未填写",
    customer_contact_email: "未填写",
    customer_contact_tell: "未填写",
    customer_contact_wechat: "未填写",
    customer_id: "未填写",
  }
  public ClientAddress: addressObj;
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
    this.getClientDetail();
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
        this.userid = data.userid;
        this.httploading.HttpServerLoading("加载中...")
        this.ajaxserve.getClientDetails({ tokenid: this.tokenid, userid: this.userid, customer_id: this.customer_id }).then((data) => {
          if (data.status.Code = "200") {
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
            if (data.data.contact !== null) {
              //  for (var i = 0; i < data.data.clist.length; i++) {
              this.linkCantPageObj.customer_contact_id = data.contact.customer_contact_id;
              this.linkCantPageObj.customer_contact_name = data.contact.customer_contact_name;
              this.linkCantPageObj.customer_contact_position = data.contact.customer_contact_position;
              this.linkCantPageObj.customer_contact_email = data.contact.customer_contact_email;
              this.linkCantPageObj.customer_contact_tell = data.contact.customer_contact_tell;
              this.linkCantPageObj.customer_contact_wechat = data.contact.customer_contact_wechat;
              this.linkCantPageObj.customer_id = data.contact.customer_id;
              // this.linkCantPageObj.customer_contact_id = data.contact.customer_contact_id;
              //console.log(this.linkCantPageObj);
              // }
            } else {
              this.linkCantPageObj.customer_contact_id = "未填写";
              this.linkCantPageObj.customer_contact_name = "未填写";
              this.linkCantPageObj.customer_contact_position = "未填写";
              this.linkCantPageObj.customer_contact_email = "未填写";
              this.linkCantPageObj.customer_contact_tell = "未填写";
              this.linkCantPageObj.customer_contact_wechat = "未填写";
              this.linkCantPageObj.customer_id = "未填写";
            }
            console.log(this.privateClientDetailsPageObj);
            console.log(this.linkCantPageObj);
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
        linkCantact: this.linkCantPageObj.customer_contact_name,
        wechat: this.linkCantPageObj.customer_contact_wechat,
        phone: this.linkCantPageObj.customer_contact_tell,
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
            console.log('Buy clicked');
          }
        }
      ]
    });
    alert.present();
  }
  cilentType(event) {
    console.log(event);
  }
  cilentRank(event) {
    console.log(event);
  }
  cilentNeed(event) {
    console.log(event);
  }
  cilentSoure(event) {
    console.log(event);
  }
  cilentStatus(event) {
    console.log(event);
  }
  goClientRemark() {
    //let profileModal = this.modalCtrl.create('ClientRemarksPage', { 'remark': this.ClientRemark });
    let profileModal = this.modalCtrl.create('ClientRemarksPage');
    profileModal.onDidDismiss(data => {
      console.log(data);
      // if (data !== "undefined") {
      //   if (data.remark !== "" && data.remark !== 'undefined') {
      //     this.isShowRemark = false;
      //     this.ClientRemark = data.remark;
      //   } else if (data.remark == 'undefined') {
      //     this.isShowRemark = true;
      //     this.ClientRemark = "未填写"
      //   }
      // }
    });
    profileModal.present();
  }
  goClientAddress() {
    let profileModal = this.modalCtrl.create('ClientAddressPage', { 'address': this.ClientAddress });
    //  let profileModal = this.modalCtrl.create('ClientAddressPage');
    profileModal.onDidDismiss(data => {
      console.log(data);
      // if (data.address.address !== "" && data.address.address !== 'undefined') {
      //   this.isShowAddress = false;
      //   this.ClientAddress.address = data.address.address;
      //   this.ClientAddress.addressDetails = data.address.addressDetails;
      // } else if (data.address.address == 'undefined') {
      //   this.isShowAddress = true;
      //   this.ClientAddress.address = "未填写";
      //   this.ClientAddress.addressDetails = "未填写";
      // }

    });
    profileModal.present();
  }

}

