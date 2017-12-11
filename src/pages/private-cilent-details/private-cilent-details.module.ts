import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrivateCilentDetailsPage } from './private-cilent-details';
import { MultiPickerModule } from 'ion-multi-picker';

@NgModule({
  declarations: [
    PrivateCilentDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(PrivateCilentDetailsPage),
    MultiPickerModule
  ],
})
export class PrivateCilentDetailsPageModule { }
