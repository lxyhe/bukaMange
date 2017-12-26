import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController, ModalController, App } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Storage } from '@ionic/storage';
import { HttpLodingService } from '../../providers/loadingServer';
import { ajaxService } from '../../providers/ajaxServe';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
/**
 * Generated class for the PersonSetingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-person-seting',
  templateUrl: 'person-seting.html',
})
export class PersonSetingPage {
  public simpleColumns: any;
  public img: any = null;
  public tokenid: string;
  public userid: string;
  public penSetingData: string;
  public userSex: number;
  public username: string;
  public name: string;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    private camera: Camera,
    private alertCtrl: AlertController,
    private storage: Storage,
    public httploading: HttpLodingService,
    public ajaxserve: ajaxService,
    public modalCtrl: ModalController,
    private transfer: FileTransfer,
    public app: App

  ) {
    this.penSetingData = this.navParams.get('data');
    console.log(this.penSetingData);
    this.userSex = this.penSetingData['account_login_sex'];
    this.username = this.penSetingData['account_login_name'];
    this.name = this.penSetingData['real_name'];
    this.img = this.penSetingData['account_login_avatar'];
    console.log(this.userSex);
    this.simpleColumns = [
      {
        name: 'col1',
        options: [
          { text: '男', value: '1' },
          { text: '女', value: '2' },

        ]
      }
    ];
    // console.log(this.userSex);
    // if (this.userSex == "1") {
    //   this.userSex = "男"
    // } else {
    //   this.userSex = "女"
    // }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonSetingPage');
  }
  modSex(event) {
    try {
      this.storage.get('userInfo').then((data) => {
        this.tokenid = data.tokenid;
        this.userid = data.userid;
        this.httploading.HttpServerLoading("修改中...")
        this.ajaxserve.modifiterSex({ tokenid: this.tokenid, userid: this.userid, usersex: event.col1.value, }).then((data) => {
          if (data.status.Code = "200") {
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
  setingHead() {
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
              this.img = imageData;

              this.upload(this.img)
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
              this.img = imageData;
              this.upload(this.img)
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
  upload(path) {
    console.log(path);
    this.httploading.HttpServerLoading("上传中...")
    var filname = path.substr(path.lastIndexOf('/') + 1);
    if (filname.indexOf('?') != -1) {
      filname = filname.substr(0, filname.indexOf('?'));
    }
    console.log(filname);
    const fileTransfer: FileTransferObject = this.transfer.create();
    let options: FileUploadOptions = {
      fileKey: 'file',
      fileName: filname,
    }
    fileTransfer.upload(path, "http://a.buka.tv/BaseCommon/upload/upload", options, true)
      .then((data) => {
        this.httploading.ColseServerLoding();
        var imgurl = JSON.stringify(data);
        imgurl = JSON.parse(imgurl);
        this.img = data.response;
        this.setingHeadimg(data.response)
      }, (err) => {
        this.httploading.ColseServerLoding();
        alert(err + "错误");
      })
  }
  exit() {
    let alert = this.alertCtrl.create({
      message: '您确定退出CRM系统吗?',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: '确定',
          handler: () => {
            this.storage.clear().then((data) => {
              setTimeout(() => {
                this.app.getRootNav().setRoot('LogingPage')
              }, 500)
            })

          }
        }
      ]
    });
    alert.present();
  }
  setingName() {
    let profileModal = this.modalCtrl.create('PersonSetingNamePage', { 'nickName': this.name });
    profileModal.onDidDismiss(data => {
      if (data !== "undefined") {
        if (data.nickName !== "" && data.nickName !== 'undefined') {
          this.name = data.nickName;
        } else if (data.nickName == 'undefined') {
          this.name = "未填写"
        }
      }
    });
    profileModal.present();
  }
  setingHeadimg(img) {
    try {
      this.storage.get('userInfo').then((data) => {
        this.tokenid = data.tokenid;
        this.userid = data.userid;
        this.ajaxserve.modifiterHeadImg({ userid: this.userid, tokenid: this.tokenid, useravatar: img }).then((data) => {
          if (data.status.Code = "200") {
            this.httploading.alertServe('修改成功');
          }
        }).catch((err) => {
          this.httploading.ColseServerLoding();
          alert(err);
        })
      })
    }
    catch (err) {
      alert(err);
    }
  }
}
