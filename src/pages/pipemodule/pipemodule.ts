
import { NgModule } from '@angular/core';

import { IonicPageModule } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ContactPage } from '../contact/contact';
import { clientTypePipe, clientRankPipe, clientNeedPipe, clientSourePipe, clientStatusPipe } from '../../pipes/clientTypeTransfrom';
@NgModule({
  declarations: [
    HomePage,
    ContactPage,
    clientTypePipe,
    clientRankPipe,
    clientNeedPipe,
    clientSourePipe,
    clientStatusPipe
  ],
  imports: [
    // IonicPageModule.forChild(HomePage),

  ],
  providers: [

  ]
})
export class HomePageModule {

}
