import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrivateCilentDetailsPage } from './private-cilent-details';
import { MultiPickerModule } from 'ion-multi-picker';
import { HttpService } from '../../providers/httpserver';
import { HttpLodingService } from '../../providers/loadingServer';
import { ajaxService } from '../../providers/ajaxServe';
//import { PipesModule } from '../../pipes/pipe.module';

@NgModule({
  declarations: [
    PrivateCilentDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(PrivateCilentDetailsPage),
    MultiPickerModule,
    //PipesModule
  ],
  providers: [
    HttpService,
    HttpLodingService,
    ajaxService
  ]
})
export class PrivateCilentDetailsPageModule { }
