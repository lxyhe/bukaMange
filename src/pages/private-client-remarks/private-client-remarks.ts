
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HttpLodingService } from '../../providers/loadingServer';
import { ajaxService } from '../../providers/ajaxServe';
import { Storage } from '@ionic/storage';
@IonicPage()
@Component({
  selector: 'page-private-client-remarks',
  templateUrl: 'private-client-remarks.html',
})
export class PrivateClientRemarksPage {
  public RemarkText: any = "";
  public tokenid: string = "";
  public customer_id: any = "";
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private storage: Storage,
    public httploading: HttpLodingService,
    public ajaxserve: ajaxService
  ) {
    if (navParams.get('remark') == "未填写") {
      this.RemarkText = "";
    } else {
      this.RemarkText = navParams.get('remark');
      this.customer_id = navParams.get('customer')
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PrivateClientRemarksPage');
  }
  dismiss() {
    this.clientMemo();
    let data = { 'remark': this.RemarkText };
    this.viewCtrl.dismiss(data);
  }
  clientMemo() {
    try {
      this.storage.get('userInfo').then((data) => {
        this.tokenid = data.tokenid;
        this.httploading.HttpServerLoading("修改中...")
        this.ajaxserve.modifiterClientRemark({ tokenid: this.tokenid, customer_remarks: this.RemarkText, customer_id: this.customer_id }).then((data) => {
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

}
