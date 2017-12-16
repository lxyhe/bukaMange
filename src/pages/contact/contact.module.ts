/**
 * Created by hsuanlee on 2017/4/4.
 */
import { NgModule } from '@angular/core';
import { ContactPage } from './contact';
import { IonicPageModule } from 'ionic-angular';
import { HttpService } from '../../providers/httpserver';
import { HttpLodingService } from '../../providers/loadingServer';
import { ajaxService } from '../../providers/ajaxServe';
@NgModule({
  declarations: [ContactPage],
  imports: [IonicPageModule.forChild(ContactPage)],
  providers: [
    HttpService,
    HttpLodingService,
    ajaxService
    // Storage
  ]
})
export class ContactPageModule { }
