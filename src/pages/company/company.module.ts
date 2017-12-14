import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompanyPage } from './company';
import { HttpService } from '../../providers/httpserver';
import { HttpLodingService } from '../../providers/loadingServer';
import { ajaxService } from '../../providers/ajaxServe';
@NgModule({
  declarations: [
    CompanyPage,
  ],
  imports: [
    IonicPageModule.forChild(CompanyPage),
  ],
  providers: [
    HttpService,
    HttpLodingService,
    ajaxService
    // Storage
  ]
})
export class CompanyPageModule { }
