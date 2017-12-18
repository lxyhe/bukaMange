/**
 * Created by hsuanlee on 2017/4/4.
 */
import { NgModule } from '@angular/core';
import { ContactPage } from './contact';
import { IonicPageModule } from 'ionic-angular';
import { HttpService } from '../../providers/httpserver';
import { HttpLodingService } from '../../providers/loadingServer';
import { ajaxService } from '../../providers/ajaxServe';
//import { clientTypePipe, clientRankPipe, clientNeedPipe, clientSourePipe, clientStatusPipe } from '../../pipes/clientTypeTransfrom';
import { PipesModule } from '../../pipes/pipe.module';
@NgModule({
  declarations: [
    ContactPage,
    // clientTypePipe,
    // clientRankPipe,
    // clientNeedPipe,
    // clientSourePipe,
    // clientStatusPipe
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(ContactPage)

  ],
  providers: [
    HttpService,
    HttpLodingService,
    ajaxService
    // Storage
  ]
})
export class ContactPageModule { }
