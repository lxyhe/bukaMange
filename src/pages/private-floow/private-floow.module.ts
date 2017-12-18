import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrivateFloowPage } from './private-floow';
import { HttpService } from '../../providers/httpserver';
import { HttpLodingService } from '../../providers/loadingServer';
import { ajaxService } from '../../providers/ajaxServe';
import { PipesModule } from '../../pipes/pipe.module';
@NgModule({
  declarations: [
    PrivateFloowPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(PrivateFloowPage),
  ],
  providers: [
    HttpService,
    HttpLodingService,
    ajaxService
    // Storage
  ]
})
export class PrivateFloowPageModule { }
