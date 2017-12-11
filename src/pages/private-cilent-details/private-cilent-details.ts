

/**
 * Generated class for the PrivateCilentDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// import { AlertController } from 'ionic-angular';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the ClientDetailspagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import { MultiPickerModule } from 'ion-multi-picker';
@IonicPage()
@Component({
  selector: 'page-private-cilent-details',
  templateUrl: 'private-cilent-details.html',
})
export class PrivateCilentDetailsPage {
  public simpleColumns: any;
  public default: any = 2;
  public Privatedetails: any = "PrivateFloowPage";
  public privatedetailsInfo: Object;
  // <button ion-item [navPush]="Privatedetails" [navParams]="privatedetailsInfo">
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController

  ) {
    this.simpleColumns = [
      {
        name: 'col1',
        options: [
          { text: '1', value: '1' },
          { text: '2', value: '2' },
          { text: '3', value: '3' }
        ]
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrivateClientDetailspagePage');
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

}

