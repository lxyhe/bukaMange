
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ActionSheetController, ModalController } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';

export class linCantactsObj {
  name: string;
  post: string;
  phone: number | string;
  wechat: string | number;
  email: string | number;
}
export class addressObj {
  address: string;
  addressDetails: string;
}
@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public clientTypeValue: string;
  public clientRankValue: string;
  public clientDemandValue: string;
  public clientSourceValue: string;
  public clientStatusValue: string;
  /* */
  public Privatedetails: any = "PrivateFloowPage";
  public privatedetailsInfo: Object;
  public img: any;
  public clientType: Array<object>;
  public clientRank: Array<object>;
  public clientDemand: Array<object>;
  public clientSource: Array<object>;
  public clientStatus: Array<object>;
  public CilentName: string = "未填写";
  public linkCantacts: linCantactsObj;
  public ClientAddress: addressObj;
  public ClientRemark: string = "未填写";
  public isShowRemark: boolean = true;
  public isShowAddress: boolean = true;

  public linkArray: linCantactsObj[] = [
    // {
    //   name: this.linkCantacts.name,
    //   post: this.linkCantacts.post,
    //   phone: this.linkCantacts.phone,
    //   wechat: this.linkCantacts.wechat,
    //   email: this.linkCantacts.email
    // }
  ];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private camera: Camera,
    public actionSheetCtrl: ActionSheetController,
    public modalCtrl: ModalController
  ) {
    this.linkCantacts = new linCantactsObj();
    this.ClientAddress = new addressObj();
    this.linkCantacts.name = "未填写";
    this.linkCantacts.email = "";
    this.linkCantacts.phone = "";
    this.linkCantacts.post = "";
    this.linkCantacts.wechat = "";
    this.ClientAddress.address = "未填写";
    this.ClientAddress.addressDetails = "";
    console.log(this.ClientAddress);
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
  }
  goLinkContact() {
    let profileModal = this.modalCtrl.create('LinkContactsPage', { 'linkcontacts': this.linkCantacts });
    profileModal.onDidDismiss(data => {
      console.log(data);
      if (data.linkcontacts.name !== "" && data.linkcontacts.name !== 'undefined') {
        this.linkCantacts.name = data.linkcontacts.name;
        this.linkCantacts.email = data.linkcontacts.email;
        this.linkCantacts.phone = data.linkcontacts.phone;
        this.linkCantacts.wechat = data.linkcontacts.wechat;
        this.linkCantacts.post = data.linkcontacts.post;
      } else if (data.linkcontacts.name == 'undefined') {
        this.linkCantacts.name = "未填写"
      }
      this.linkArray.push(this.linkCantacts);
      console.log(this.linkArray);

    });
    profileModal.present();
  }

  goClientName() {
    let profileModal = this.modalCtrl.create('ClientMamePage', { 'nickName': this.CilentName });
    profileModal.onDidDismiss(data => {
      if (data !== "undefined") {
        if (data.nickName !== "" && data.nickName !== 'undefined') {
          this.CilentName = data.nickName;
        } else if (data.nickName == 'undefined') {
          this.CilentName = "未填写"
        }
      }
    });
    profileModal.present();
  }

  goClientAddress() {
    console.log(this.ClientAddress);
    let profileModal = this.modalCtrl.create('ClientAddressPage', { 'address': this.ClientAddress });
    profileModal.onDidDismiss(data => {
      console.log(data);
      if (data.address.address !== "" && data.address.address !== 'undefined') {
        this.isShowAddress = false;
        this.ClientAddress.address = data.address.address;
        this.ClientAddress.addressDetails = data.address.addressDetails;
      } else if (data.address.address == 'undefined') {
        this.isShowAddress = true;
        this.ClientAddress.address = "未填写";
      }

    });
    profileModal.present();
  }
  goClientRemark() {
    let profileModal = this.modalCtrl.create('ClientRemarksPage', { 'remark': this.ClientRemark });
    profileModal.onDidDismiss(data => {
      if (data !== "undefined") {
        if (data.remark !== "" && data.remark !== 'undefined') {
          this.isShowRemark = false;
          this.ClientRemark = data.remark;
        } else if (data.remark == 'undefined') {
          this.isShowRemark = true;
          this.ClientRemark = "未填写"
        }
      }
    });
    profileModal.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PrivateClientDetailspagePage');
  }

  setingHead(e) {

    if (e.target.nodeName == "IMG") {
      console.log(e);
      let actionSheet = this.actionSheetCtrl.create({
        buttons: [
          {
            text: '拍照',
            role: 'camera',
            handler: () => {
              const options: CameraOptions = {
                quality: 80,
                allowEdit: true,
                targetWidth: 800,
                targetHeight: 800,
                saveToPhotoAlbum: false,
                correctOrientation: true,
                destinationType: this.camera.DestinationType.FILE_URI,
                sourceType: this.camera.PictureSourceType.CAMERA,
              }
              this.camera.getPicture(options).then((imageData) => {
                this.img = imageData;
              }, (err) => {
                console.log(err);
              });
            }
          }, {
            text: '从手机相册选择',
            role: 'Photo',
            handler: () => {
              const options: CameraOptions = {
                quality: 80,
                allowEdit: true,
                targetWidth: 800,
                targetHeight: 800,
                sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
              }
              this.camera.getPicture(options).then((imageData) => {
                this.img = imageData;
              }, (err) => {
                console.log(err);
              });
            }
          }, {
            text: '取消',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });
      actionSheet.present();
    }

  }
  publish() {

  }

}

