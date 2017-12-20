import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Storage } from '@ionic/storage';
import { HttpLodingService } from '../../providers/loadingServer';
import { ajaxService } from '../../providers/ajaxServe';

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
  public img: any;
  public tokenid: string;
  public userid: string;
  public penSetingData: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    private camera: Camera,
    private alertCtrl: AlertController,
    private storage: Storage,
    public httploading: HttpLodingService,
    public ajaxserve: ajaxService,

  ) {
    this.penSetingData = this.navParams.get('data');
    console.log(this.penSetingData);
    this.simpleColumns = [
      {
        name: 'col1',
        options: [
          { text: '男', value: '1' },
          { text: '女', value: '2' },

        ]
      }
    ];

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
}
