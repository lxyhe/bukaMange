import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClientMamePage } from './client-mame';

@NgModule({
  declarations: [
    ClientMamePage,
  ],
  imports: [
    IonicPageModule.forChild(ClientMamePage),
  ],
})
export class ClientMamePageModule { }
