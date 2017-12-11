import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HeadSetingPage } from './head-seting';

@NgModule({
  declarations: [
    HeadSetingPage,
  ],
  imports: [
    IonicPageModule.forChild(HeadSetingPage),
  ],
})
export class HeadSetingPageModule {}
