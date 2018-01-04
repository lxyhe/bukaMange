import { Component, ViewChild } from '@angular/core';

import { IonicPage, Tabs, Events, Nav, NavController } from "ionic-angular";

//import { BackButtonService } from '../../providers/backbuttonServe';
@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  @ViewChild('myTabs') tabRef: Tabs;
  tab1Root: any = 'HomePage';
  tab2Root: any = 'AboutPage';
  tab3Root: any = 'ContactPage';

  constructor(
    //private backbutton: BackButtonService,
    //private platfrom: Platform
    public event: Events,
    public navCtrl: NavController,
    private nav: Nav
  ) {

    //
    // platfrom.ready().then(() => {
    //this.backbutton.registerBackButtonAction(null);
    //})
  }
  switchTabs(index: number) {
    this.tabRef.select(index);
  }
  ionViewDidEnter() {
    this.event.subscribe('pulish:over', (index) => {
      this.switchTabs(index);
    })
    this.event.subscribe('receive:over', (index) => {
      this.switchTabs(index);
    })
  }
  ionViewWillLeave() {
    this.event.unsubscribe("pulish:over", null);
    this.event.unsubscribe("receive:over", null);
  }
}
