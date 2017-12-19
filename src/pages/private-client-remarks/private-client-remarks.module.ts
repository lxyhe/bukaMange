import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrivateClientRemarksPage } from './private-client-remarks';
import { HttpService } from '../../providers/httpserver';
import { HttpLodingService } from '../../providers/loadingServer';
import { ajaxService } from '../../providers/ajaxServe';
@NgModule({
  declarations: [
    PrivateClientRemarksPage,
  ],
  imports: [
    IonicPageModule.forChild(PrivateClientRemarksPage),
  ],
  providers: [
    HttpService,
    HttpLodingService,
    ajaxService
    // Storage
  ]
})
export class PrivateClientRemarksPageModule { }
