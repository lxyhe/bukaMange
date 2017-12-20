import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonSetingPage } from './person-seting';
import { MultiPickerModule } from 'ion-multi-picker';
import { Camera } from '@ionic-native/camera';
import { HttpService } from '../../providers/httpserver';
import { HttpLodingService } from '../../providers/loadingServer';
import { ajaxService } from '../../providers/ajaxServe';

@NgModule({
  declarations: [
    PersonSetingPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonSetingPage),
    MultiPickerModule
  ],
  providers: [
    Camera,
    HttpService,
    HttpLodingService,
    ajaxService,
  ]
})
export class PersonSetingPageModule { }
