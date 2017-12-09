// import { NgModule } from '@angular/core';
// import { IonicPageModule } from 'ionic-angular';
// import { LogingPage } from './loging';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LogingPage } from './loging';
@NgModule({
  declarations: [
    LogingPage,
  ],
  imports: [
    IonicPageModule.forChild(LogingPage),
  ],
  exports: [
    LogingPage
  ]
})
export class LogingPageModule { }
