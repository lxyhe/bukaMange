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
export interface companylistObj {
  tokenid: string | number;
  userid: string | number;
}
export interface grounpList {
  tokenid: string | number;
  team_id: string | number;
}
export interface pravateclientList {
  tokenid: string | number;
  account_login_id: string | number;
}
export interface publicclientinfoObj {


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
  companyList(companylist: companylistObj) {
    return this.httpserve.get(api.companlist, companylist)
  }
  //获取团队列表
  grounpList(grounplist: grounpList) {
    return this.httpserve.get(api.grounplist, grounplist)
  }
  //获取个人私海客户
  PrivateClienList(pravateclientlist: pravateclientList) {
    return this.httpserve.get(api.prvateCilentlist, pravateclientlist)
  }
  //获取公海列表
  publicClientList(publicclientlist: companylistObj) {
    return this.httpserve.get(api.publicClientlist, publicclientlist)
  }
  //获取总监接口
  inspectorGroupList(inspectorlist: companylistObj) {
    return this.httpserve.get(api.inspectorlist, inspectorlist)
  }
  //个人接口
  personClientList(personclientlist: companylistObj) {
    return this.httpserve.get(api.personclientlist, personclientlist)
  }
  //发布客户信息
  publicClientInfo(publicclientinfo: publicclientinfoObj) {
    return this.httpserve.post(api.publishclientInfo, publicclientinfo)
  }

}
