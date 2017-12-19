import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrivateClientAddressPage } from './private-client-address';
import { CityPickerModule } from "ionic2-city-picker";
import { privateCityPickerService } from "../../providers/privateCityPickerService";
import { HttpService } from '../../providers/httpserver';
import { HttpLodingService } from '../../providers/loadingServer';
import { ajaxService } from '../../providers/ajaxServe';
@NgModule({
  declarations: [
    PrivateClientAddressPage,
  ],
  imports: [
    IonicPageModule.forChild(PrivateClientAddressPage),
    CityPickerModule
  ],
  providers: [
    privateCityPickerService,
    HttpService,
    HttpLodingService,
    ajaxService

  ]
})
export class PrivateClientAddressPageModule { }
