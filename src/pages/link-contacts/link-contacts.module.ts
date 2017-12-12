import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LinkContactsPage } from './link-contacts';

@NgModule({
  declarations: [
    LinkContactsPage,
  ],
  imports: [
    IonicPageModule.forChild(LinkContactsPage),
  ],
})
export class LinkContactsPageModule {}
