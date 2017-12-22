import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HeadSetingPage } from './head-seting';
import { Camera } from '@ionic-native/camera';
import { FileTransfer } from '@ionic-native/file-transfer';
import { HttpService } from '../../providers/httpserver';
import { HttpLodingService } from '../../providers/loadingServer';
import { ajaxService } from '../../providers/ajaxServe';
@NgModule({
  declarations: [
    HeadSetingPage,
  ],
  imports: [
    IonicPageModule.forChild(HeadSetingPage),
  ],
  providers: [
    Camera,
    FileTransfer,
    HttpService,
    HttpLodingService,
    ajaxService,
  ]
})
export class HeadSetingPageModule { }
