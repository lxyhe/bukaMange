import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClientAddressPage } from './client-address';
import { CityPickerModule } from "ionic2-city-picker";
import { CityPickerService } from "../../providers/getCityServer";

@NgModule({
  declarations: [
    ClientAddressPage,
  ],
  imports: [
    IonicPageModule.forChild(ClientAddressPage),
    CityPickerModule
  ],
  providers: [
    CityPickerService
  ]
})
export class ClientAddressPageModule {

}
