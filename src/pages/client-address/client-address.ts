
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { CityPickerService } from "../../providers/getCityServer";
/**
 * Generated class for the ClientMamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export class addressObj {
  address: string = "";
  addressDetails: string = "";
}
@IonicPage()
@Component({
  selector: 'page-client-address',
  templateUrl: 'client-address.html',
})
export class ClientAddressPage {
  public queryText = "";
  public cityData: any[]; //城市数据
  public cityName: string = ''; //初始化城市名
  public code: string; //城市编码
  public detailsAddress: addressObj;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public cityPickerSev: CityPickerService) {

    this.detailsAddress = new addressObj();
    let addresObj = navParams.get('address');

    if (addresObj.address == "未填写") {
      this.detailsAddress.address = "";
      this.detailsAddress.addressDetails = "";
    } else {
      this.detailsAddress.address = addresObj.address;
      this.detailsAddress.addressDetails = addresObj.addressDetails;
    }
    this.setCityPickerData();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientMamePage');
  }

  setCityPickerData() {
    this.cityPickerSev.getCitiesData()
      .then(data => {
        this.cityData = data;
      });
  }
  cityChange(event) {


    // this.code = event['region'].value
    var addres = "-"
    let addressString = event.province.text + addres + event.city.text + addres + event.region.text

    this.detailsAddress.address = addressString;

  }
  dismiss() {
    let data = { 'address': this.detailsAddress };
    this.viewCtrl.dismiss(data);
  }
}
