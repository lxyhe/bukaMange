/**
 * Created by hsuanlee on 2017/4/4.
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutPage } from './about';
import { MultiPickerModule } from 'ion-multi-picker';
import { Camera } from '@ionic-native/camera';
import { HttpService } from '../../providers/httpserver';
import { HttpLodingService } from '../../providers/loadingServer';
import { ajaxService } from '../../providers/ajaxServe';
// @NgModule({
//   declarations: [
//     PrivateCilentDetailsPage,
//   ],
//   imports: [
//     IonicPageModule.forChild(PrivateCilentDetailsPage),
//     MultiPickerModule
//   ],
// })
@NgModule({
  declarations: [
    AboutPage,
  ],
  imports: [
    IonicPageModule.forChild(AboutPage),
    MultiPickerModule
  ],
  exports: [
    AboutPage
  ],
  providers: [
    Camera,
    HttpService,
    HttpLodingService,
    ajaxService
  ]
})
export class AboutPageModule { }
