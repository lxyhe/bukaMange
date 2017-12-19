import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MemberPage } from './member';
import { HttpService } from '../../providers/httpserver';
import { HttpLodingService } from '../../providers/loadingServer';
import { ajaxService } from '../../providers/ajaxServe';
import { PipesModule } from '../../pipes/pipe.module';
@NgModule({
  declarations: [
    MemberPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(MemberPage),
  ],
  providers: [
    HttpService,
    HttpLodingService,
    ajaxService
    // Storage
  ]
})
export class MemberPageModule { }
