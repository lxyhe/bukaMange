import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrivateFloowPage } from './private-floow';
import { HttpService } from '../../providers/httpserver';
import { HttpLodingService } from '../../providers/loadingServer';
import { ajaxService } from '../../providers/ajaxServe';
import { PipesModule } from '../../pipes/pipe.module';
import { Camera } from '@ionic-native/camera';
import { Clipboard } from '@ionic-native/clipboard';
import { Toast } from '@ionic-native/toast';
import { Contacts } from '@ionic-native/contacts';
@NgModule({
  declarations: [
    PrivateFloowPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(PrivateFloowPage),
  ],
  providers: [
    Camera,
    HttpService,
    HttpLodingService,
    ajaxService,
    Clipboard,
    Toast,
    Contacts
    // Storage
  ]
})
export class PrivateFloowPageModule { }
