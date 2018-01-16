
// import { NgModule } from '@angular/core';
// import { IonicPageModule } from 'ionic-angular';
// import { LogingPage } from './loging';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FindpasswordPage } from './findpassword';
import { HttpService } from '../../providers/httpserver';
import { HttpLodingService } from '../../providers/loadingServer';
import { ajaxService } from '../../providers/ajaxServe';
//import { Storage } from '@ionic/storage';
// import { Toast } from '@ionic-native/toast';
// import { BackButtonService } from '../../providers/backbuttonServe';

@NgModule({
  declarations: [
    FindpasswordPage,
  ],
  imports: [
    IonicPageModule.forChild(FindpasswordPage),
  ],
  exports: [
    FindpasswordPage
  ],
  providers: [
    HttpService,
    HttpLodingService,
    ajaxService,
    // BackButtonService,
    // Toast
    // Storage
  ]
})
export class FindpasswordPageModule { }
