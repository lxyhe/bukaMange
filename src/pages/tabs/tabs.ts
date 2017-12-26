import { Component, ViewChild } from '@angular/core';

import { IonicPage, Tabs } from "ionic-angular";
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
  ) {
    // platfrom.ready().then(() => {
    //this.backbutton.registerBackButtonAction(null);
    //})
  }
}
