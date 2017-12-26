// import { NgModule } from '@angular/core';
// import { IonicPageModule } from 'ionic-angular';
// import { LogingPage } from './loging';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LogingPage } from './loging';
import { HttpService } from '../../providers/httpserver';
import { HttpLodingService } from '../../providers/loadingServer';
import { ajaxService } from '../../providers/ajaxServe';
//import { Storage } from '@ionic/storage';
import { Toast } from '@ionic-native/toast';
import { BackButtonService } from '../../providers/backbuttonServe';

@NgModule({
  declarations: [
    LogingPage,
  ],
  imports: [
    IonicPageModule.forChild(LogingPage),
  ],
  exports: [
    LogingPage
  ],
  providers: [
    HttpService,
    HttpLodingService,
    ajaxService,
    BackButtonService,
    Toast
    // Storage
  ]
})
export class LogingPageModule { }
