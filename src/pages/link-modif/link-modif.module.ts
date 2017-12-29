// import { NgModule } from '@angular/core';
// import { IonicPageModule } from 'ionic-angular';
// import { LinkModifPage } from './link-modif';

// @NgModule({
//   declarations: [
//     LinkModifPage,
//   ],
//   imports: [
//     IonicPageModule.forChild(LinkModifPage),
//   ],
// })
// export class LinkModifPageModule { }

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LinkModifPage } from './link-modif';
import { HttpService } from '../../providers/httpserver';
import { HttpLodingService } from '../../providers/loadingServer';
import { ajaxService } from '../../providers/ajaxServe';


@NgModule({
  declarations: [
    LinkModifPage,
  ],
  imports: [
    IonicPageModule.forChild(LinkModifPage),
  ],
  providers: [

    HttpLodingService,
    HttpService,
    ajaxService,
  ]
})
export class LinkModifPageModule { }
