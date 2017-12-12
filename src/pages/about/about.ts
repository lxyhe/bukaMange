
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
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private camera: Camera,
    public actionSheetCtrl: ActionSheetController,
    public modalCtrl: ModalController
  ) {
    this.linkCantacts = new linCantactsObj();
    console.log(this.linkCantacts);
    this.linkCantacts.name = "未填写";
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
  ionViewDidLoad() {
    console.log('ionViewDidLoad PrivateClientDetailspagePage');
  }

  setingHead() {
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
  publish() {
    console.log(this.clientTypeValue,
      this.clientRankValue,
      this.clientDemandValue,
      this.clientSourceValue,
      this.clientStatusValue,
    )
  }

}

