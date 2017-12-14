import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { HttpService } from './httpserver';
import { api } from './apiAddress';
import { HttpLodingService } from './loadingServer';
export interface logingObj {
  username: string | number;
  password: string | number;
}
export interface companlistObj {
  tokenid: string | number;
  userid: string | number;
}
@Injectable()

export class ajaxService {
  public loader;
  constructor(
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public events: Events,
    public httpserve: HttpService,
    public httploading: HttpLodingService
  ) {

  }
  /*登录 */
  LogingCrm(loginobj: logingObj) {
    return this.httpserve.post(api.logingapi, loginobj)
  }
  /*获取公司列表*/
  companyList(companylist: companlistObj) {
    return this.httpserve.get(api.companlist, companylist)
  }
}
