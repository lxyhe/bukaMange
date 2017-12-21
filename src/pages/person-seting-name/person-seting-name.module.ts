import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonSetingNamePage } from './person-seting-name';
import { HttpService } from '../../providers/httpserver';
import { HttpLodingService } from '../../providers/loadingServer';
import { ajaxService } from '../../providers/ajaxServe';
@NgModule({
  declarations: [
    PersonSetingNamePage,
  ],
  imports: [
    IonicPageModule.forChild(PersonSetingNamePage),
  ],
  providers: [
    HttpService,
    HttpLodingService,
    ajaxService
    // Storage
  ]
})
export class PersonSetingNamePageModule { }
