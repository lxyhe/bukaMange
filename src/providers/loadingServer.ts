import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';
//import { Events } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
@Injectable()

export class HttpLodingService {
  public loader;
  constructor(public alertCtrl: AlertController, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {

  }
  HttpServerLoading(memo) {
    this.loader = this.loadingCtrl.create({
      content: memo,
      duration: 100000
    });
    this.loader.present();
  }
  ColseServerLoding() {
    this.loader.dismiss();
  }
  errorServerToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }
  alertServe(content) {
    let alert = this.alertCtrl.create({
      subTitle: content,
      buttons: ['OK']
    });
    alert.present();
  }

}
