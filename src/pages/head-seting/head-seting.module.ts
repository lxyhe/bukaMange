import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HeadSetingPage } from './head-seting';
import { Camera } from '@ionic-native/camera';
@NgModule({
  declarations: [
    HeadSetingPage,
  ],
  imports: [
    IonicPageModule.forChild(HeadSetingPage),
  ],
  providers: [
    Camera
  ]
})
export class HeadSetingPageModule { }
