import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LinkContactsPage } from './link-contacts';
import { HttpLodingService } from '../../providers/loadingServer';
@NgModule({
  declarations: [
    LinkContactsPage,
  ],
  imports: [
    IonicPageModule.forChild(LinkContactsPage),
  ],
  providers: [

    HttpLodingService,

  ]
})
export class LinkContactsPageModule { }
