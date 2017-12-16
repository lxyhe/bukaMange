import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
//import mickData from '../../providers/mickData';
import { HttpLodingService } from '../../providers/loadingServer';
import { ajaxService } from '../../providers/ajaxServe';
/**
 * Generated class for the ClientDetailspagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export class clientDetailsInfo {
  avatar: string;
  name: string;
  reliseTime: string;
  clientType: string | number;
  clientNeed: string | number;
  clientsroure: string | number;
  clientStatus: string | number;
  clientAddress1: string | number;
  clientAddress2: string | number;
  clientRemark: string | number;
}
@IonicPage()
@Component({
  selector: 'page-client-detailspage',
  templateUrl: 'client-detailspage.html',
})
export class ClientDetailspagePage {
  public publicDetails: clientDetailsInfo;
  public publicDetailsParmas: object;
  public userid: any = "";
  public tokenid: string = "";
  public customer_id = "";
  constructor(
    public navCtrl: NavController,
    public navparam: NavParams,
    //public event: Events,
    private storage: Storage,
    public httploading: HttpLodingService,
    public ajaxserve: ajaxService,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
  ) {



    this.publicDetails = new clientDetailsInfo();
    this.publicDetailsParmas = this.navparam.get('details');
    console.log(this.publicDetailsParmas);
    this.customer_id = this.publicDetailsParmas['customer_id'];
    this.publicDetails.avatar = this.publicDetailsParmas['customer_avatar'];
    this.publicDetails.name = this.publicDetailsParmas['customer_name'];
    this.publicDetails.reliseTime = this.publicDetailsParmas['release_time'];
    this.publicDetails.clientType = this.publicDetailsParmas['customer_type_id'];
    this.publicDetails.clientNeed = this.publicDetailsParmas['customer_needs_id'];
    this.publicDetails.clientsroure = this.publicDetailsParmas['customer_source_id'];
    this.publicDetails.clientStatus = this.publicDetailsParmas['customer_status_id'];
    this.publicDetails.clientAddress1 = this.publicDetailsParmas['customer_address1'];
    this.publicDetails.clientAddress2 = this.publicDetailsParmas['customer_address2'];
    this.publicDetails.clientRemark = this.publicDetailsParmas['customer_remarks'];

  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad ClientDetailspagePage');
  }
  ionViewDidEnter() {

  }
  getClient() {
    try {
      this.storage.get('userInfo').then((data) => {
        this.tokenid = data.tokenid;
        this.httploading.HttpServerLoading("领取中...")
        this.ajaxserve.publicGetClient({ userid: this.userid, tokenid: this.tokenid, customer_id: this.customer_id }).then((data) => {
          if (data.status.Code = "200") {
            this.httploading.ColseServerLoding();
            console.log(data);
            let alert = this.alertCtrl.create({
              subTitle: data.status.Msg,
              buttons: [
                {
                  text: "确定",
                  handler: data => {
                    setTimeout(() => {
                      this.navCtrl.setRoot('HomePage');
                    }, 1500);
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
}
