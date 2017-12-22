import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Storage } from '@ionic/storage';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { HttpLodingService } from '../../providers/loadingServer';
import { ajaxService } from '../../providers/ajaxServe';
/**
 * Generated class for the HeadSetingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-head-seting',
  templateUrl: 'head-seting.html',
})
export class HeadSetingPage {
  // public img: string = null;
  public imgUrl: string;
  public tokenid: string;
  public userid: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    private camera: Camera,
    private alertCtrl: AlertController,
    private storage: Storage,
    private transfer: FileTransfer,
    public httploading: HttpLodingService,
    public ajaxserve: ajaxService,

  ) {
    this.imgUrl = this.navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HeadSetingPage');
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
              this.imgUrl = imageData;
              this.upload(this.imgUrl);
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
              this.imgUrl = imageData;
              this.upload(this.imgUrl);
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
                this.navCtrl.push('LogingPage')
              }, 1000)
            })

          }
        }
      ]
    });
    alert.present();
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
        var imgurl = JSON.stringify(data);
        imgurl = JSON.parse(imgurl);
        console.log(imgurl);
        this.imgUrl = data.response;
        this.setingHeadimg(data.response);
      }, (err) => {
        alert(err);
      })
  }
  setingHeadimg(img) {
    try {
      this.storage.get('userInfo').then((data) => {
        this.tokenid = data.tokenid;
        this.userid = data.userid;
        this.httploading.HttpServerLoading("修改中...")
        this.ajaxserve.modifiterHeadImg({ userid: this.userid, tokenid: this.tokenid, useravatar: img }).then((data) => {
          if (data.status.Code = "200") {
            this.httploading.ColseServerLoding();
            this.httploading.alertServe('修改成功');
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

}
