import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

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
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    private camera: Camera,
    private alertCtrl: AlertController) {
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
          }
        }
      ]
    });
    alert.present();
  }
}
