import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SerachPage } from './serach';
import { HttpService } from '../../providers/httpserver';
import { HttpLodingService } from '../../providers/loadingServer';
import { ajaxService } from '../../providers/ajaxServe';
import { PipesModule } from '../../pipes/pipe.module';
@NgModule({
  declarations: [
    SerachPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(SerachPage),
  ],
  providers: [
    HttpService,
    HttpLodingService,
    ajaxService
    // Storage
  ]
})
export class SerachPageModule { }
