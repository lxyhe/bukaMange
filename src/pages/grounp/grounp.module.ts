import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GrounpPage } from './grounp';
import { HttpService } from '../../providers/httpserver';
import { HttpLodingService } from '../../providers/loadingServer';
import { ajaxService } from '../../providers/ajaxServe';
import { PipesModule } from '../../pipes/pipe.module';
@NgModule({
  declarations: [
    GrounpPage,

  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(GrounpPage),
  ],
  providers: [
    HttpService,
    HttpLodingService,
    ajaxService
    // Storage
  ]
})
export class GrounpPageModule { }
