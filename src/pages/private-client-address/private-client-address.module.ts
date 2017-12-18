import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrivateClientAddressPage } from './private-client-address';

@NgModule({
  declarations: [
    PrivateClientAddressPage,
  ],
  imports: [
    IonicPageModule.forChild(PrivateClientAddressPage),
  ],
})
export class PrivateClientAddressPageModule {}
