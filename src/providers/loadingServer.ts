import {Injectable} from '@angular/core';
import { LoadingController } from 'ionic-angular';
//import { Events } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Injectable()

export class HttpLodingService {
  public loader;
  constructor(public loadingCtrl: LoadingController,public toastCtrl: ToastController) {

  }
  HttpServerLoading() {
    console.log("进入了loading中")
    this.loader = this.loadingCtrl.create({
      content: "加载中.....",
      duration: 100000
    });
    this.loader.present();
  }
  ColseServerLoding(){
    this.loader.dismiss();
  }
  errorServerToast(msg){
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }
}
