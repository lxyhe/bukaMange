
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ActionSheetController, ModalController, Events, App, Tabs } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Storage } from '@ionic/storage';
//import mickData from '../../providers/mickData';
import { HttpLodingService } from '../../providers/loadingServer';
import { ajaxService } from '../../providers/ajaxServe';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
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
  tabs: Tabs;
  //图片上传


  public clientTypeValue: string = "";
  public clientRankValue: string = "";
  public clientDemandValue: string = "";
  public clientSourceValue: string = "";
  public clientStatusValue: string = "";
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

  public userid: any;
  public tokenid: string;

  public customer_avatar: string = "";
  public tabindex: number = 2;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private camera: Camera,
    public actionSheetCtrl: ActionSheetController,
    public modalCtrl: ModalController,
    public event: Events,
    private storage: Storage,
    public httploading: HttpLodingService,
    public ajaxserve: ajaxService,
    private transfer: FileTransfer,
    private app: App
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
  }
  publish() {
    if (this.CilentName == "" || this.CilentName == "未填写") {
      this.httploading.alertServe("客户名称不能为空")
      return;
    }
    if (this.linkCantacts.name == "未填写" || this.linkCantacts.name == "") {
      this.httploading.alertServe("联系人不能为空")
      return;
    }

    if (this.clientTypeValue == "") {
      this.httploading.alertServe("客户类型不能为空")
      return;
    }
    if (this.clientRankValue == "") {
      this.httploading.alertServe("客户级别不能为空")
      return;
    }
    if (this.clientDemandValue == "") {
      this.httploading.alertServe("客户需求不能为空")
      return;
    }
    /** */

    if (this.clientSourceValue == "") {
      this.httploading.alertServe("客户来源不能为空")
      return;
    }
    if (this.clientStatusValue == "") {
      this.httploading.alertServe("客户状态不能为空")
      return;
    }
    if (this.ClientAddress.address == "" || this.ClientAddress.address == "未填写") {
      this.httploading.alertServe("客户地址不能为空")
      return;
    }
    try {
      this.storage.get('userInfo').then((data) => {
        this.tokenid = data.tokenid;
        this.userid = data.userid;
        this.httploading.HttpServerLoading("加载中...")
        this.ajaxserve.publicClientInfo({
          tokenid: this.tokenid,
          userid: this.userid,
          customer_avatar: this.customer_avatar,
          customer_name: this.CilentName,
          customer_type_id: this.clientTypeValue,
          customer_level_id: this.clientRankValue,
          customer_needs_id: this.clientDemandValue,
          customer_source_id: this.clientSourceValue,
          customer_status_id: this.clientStatusValue,
          customer_address1: this.ClientAddress.address,
          customer_address2: this.ClientAddress.addressDetails,
          customer_remarks: this.ClientRemark,
          customer_contact_name: this.linkCantacts.name,
          customer_contact_position: this.linkCantacts.post,
          customer_contact_email: this.linkCantacts.email,
          customer_contact_tell: this.linkCantacts.phone,
          customer_contact_wechat: this.linkCantacts.wechat,
        }).then((data) => {
          console.log(data);
          if (data.status.Code == "200") {
            this.httploading.ColseServerLoding();
            //this.httploading.alertServe(data.status.Msg);
            let alert = this.alertCtrl.create({
              subTitle: data.status.Msg,
              buttons: [
                {
                  text: "确定",
                  handler: data => {
                    setTimeout(() => {
                      // this.app.getRootNav().setRoot('ContactPage')

                      // this.navCtrl.setRoot('ContactPage');
                      this.event.publish('pulish:over', this.tabindex);
                    }, 500);
                  }
                }]

            });
            alert.present();
          } else if (data.status.Code == "405") {
            this.httploading.ColseServerLoding();
            let alert = this.alertCtrl.create({
              subTitle: '您的账号已在其他端登录',
              buttons: [
                {
                  text: "确定",
                  handler: data => {
                    setTimeout(() => {
                      this.app.getRootNav().setRoot('LogingPage')
                    }, 1000);
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
  goLinkContact() {
    let profileModal = this.modalCtrl.create('LinkContactsPage', { 'linkcontacts': this.linkCantacts });
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
        this.ClientAddress.addressDetails = "未填写";
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

                targetWidth: 800,
                targetHeight: 800,
                saveToPhotoAlbum: false,
                correctOrientation: true,
                destinationType: this.camera.DestinationType.FILE_URI,
                sourceType: this.camera.PictureSourceType.CAMERA,
              }
              this.camera.getPicture(options).then((imageData) => {
                this.customer_avatar = imageData;
                this.upload(this.customer_avatar);
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

                targetWidth: 800,
                targetHeight: 800,
                sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
              }
              this.camera.getPicture(options).then((imageData) => {
                this.customer_avatar = imageData;
                this.upload(this.customer_avatar);
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
  upload(path) {
    this.httploading.HttpServerLoading("上传中...")
    var filname = path.substr(path.lastIndexOf('/') + 1);
    if (filname.indexOf('?') != -1) {
      filname = filname.substr(0, filname.indexOf('?'));
    }
    const fileTransfer: FileTransferObject = this.transfer.create();
    let options: FileUploadOptions = {
      fileKey: 'file',
      fileName: filname,
    }
    fileTransfer.upload(path, "http://a.buka.tv/BaseCommon/upload/upload", options, true)
      .then((data) => {
        this.httploading.ColseServerLoding();
        this.customer_avatar = data.response;
      }, (err) => {
        console.log(err);
      })
  }

}

