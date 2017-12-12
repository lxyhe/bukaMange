import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonSetingPage } from './person-seting';
import { MultiPickerModule } from 'ion-multi-picker';
import { Camera } from '@ionic-native/camera';
@NgModule({
  declarations: [
    PersonSetingPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonSetingPage),
    MultiPickerModule
  ],
  providers: [
    Camera
  ]
})
export class PersonSetingPageModule { }
