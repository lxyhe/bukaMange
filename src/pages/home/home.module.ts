/**
 * Created by hsuanlee on 2017/4/4.
 */
import { NgModule } from '@angular/core';
import { HomePage } from './home';
import { IonicPageModule } from 'ionic-angular';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { HttpService } from '../../providers/httpserver';
import { HttpLodingService } from '../../providers/loadingServer';
import { ajaxService } from '../../providers/ajaxServe';
//import { clientTypePipe, clientRankPipe, clientNeedPipe, clientSourePipe, clientStatusPipe } from '../../pipes/clientTypeTransfrom';
import { PipesModule } from '../../pipes/pipe.module';
@NgModule({
  declarations: [
    HomePage,
    // clientTypePipe,
    // clientRankPipe,
    // clientNeedPipe,
    // clientSourePipe,
    // clientStatusPipe
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    SuperTabsModule,
    PipesModule
  ],
  providers: [
    HttpService,
    HttpLodingService,
    ajaxService
    // Storage
  ]
})
export class HomePageModule {

}
