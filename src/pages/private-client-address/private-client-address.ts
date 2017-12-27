import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { privateCityPickerService } from "../../providers/privateCityPickerService";
import { HttpLodingService } from '../../providers/loadingServer';
import { ajaxService } from '../../providers/ajaxServe';
import { Storage } from '@ionic/storage';

export class privateAddressObj {
  address: string = "";
  addressDetails: string = "";
}
@IonicPage()
@Component({
  selector: 'page-private-client-address',
  templateUrl: 'private-client-address.html',
})
export class PrivateClientAddressPage {
  public privatequeryText = "";
  public privatecityData: any[]; //城市数据
  public privatedetailsAddress: privateAddressObj;
  public tokenid: string = "";
  public customer_id: string = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
    public privatecityPickerSev: privateCityPickerService,
    private storage: Storage,
    public httploading: HttpLodingService,
    public ajaxserve: ajaxService,
  ) {

    this.privatedetailsAddress = new privateAddressObj();
    let privateaddresObj = navParams.get('address');
    console.log(privateaddresObj);
    if (privateaddresObj.customer_address1 == "未填写") {
      this.privatedetailsAddress.address = "";
      this.privatedetailsAddress.addressDetails = "";
    } else {
      this.privatedetailsAddress.address = privateaddresObj.customer_address1;
      this.privatedetailsAddress.addressDetails = privateaddresObj.customer_address2;
      this.customer_id = privateaddresObj.customer_id;
    }
    this.privatesetCityPickerData();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientMamePage');
  }

  privatesetCityPickerData() {
    this.privatecityPickerSev.privateCityPickerService()
      .then(data => {
        this.privatecityData = data;
      });
  }
  privatecityChange(event) {
    var addres = "-"
    let privateddressString = event.province.text + addres + event.city.text + addres + event.region.text
    this.privatedetailsAddress.address = privateddressString;
  }
  dismiss() {
    this.modofiAddress();
    let data = { 'address': this.privatedetailsAddress };
    this.viewCtrl.dismiss(data);
  }
  modofiAddress() {
    try {
      this.storage.get('userInfo').then((data) => {
        this.tokenid = data.tokenid;
        this.httploading.HttpServerLoading("修改中...")
        this.ajaxserve.modifiterClientAddress({
          tokenid: this.tokenid,
          customer_address1: this.privatedetailsAddress.address,
          customer_address2: this.privatedetailsAddress.addressDetails,
          customer_id: this.customer_id
        }).then((data) => {
          if (data.status.Code == "200") {
            this.httploading.ColseServerLoding();

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
