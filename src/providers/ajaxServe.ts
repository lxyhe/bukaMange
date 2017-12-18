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
export interface fllowupObj {
  tokenid: string | number;
  customer_id: string | number;
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
  userid: any;
  tokenid: any;
  customer_avatar: any;
  customer_name: any;
  customer_type_id: any;
  customer_level_id: any;
  customer_needs_id: any;
  customer_source_id: any;
  customer_status_id: any;
  customer_address1: any;
  customer_address2: any;
  customer_remarks: any;
  customer_contact_name: any;
  customer_contact_position: any;
  customer_contact_email: any;
  customer_contact_tell: any;
  customer_contact_wechat: any;
}
export interface publicGetClientObj {
  userid: any;
  customer_id: any;
  tokenid: string;
}
export interface setfoolowContentObj {
  customer_id: any;
  follow_up_name: any;
  userid: number;
  tokenid: string;
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
  //领取公海客户
  publicGetClient(publicgetclient: publicGetClientObj) {
    return this.httpserve.get(api.publicGetCilent, publicgetclient)
  }
  //获取客户详情
  getClientDetails(getclientdetails: publicGetClientObj) {
    return this.httpserve.get(api.getClientDetails, getclientdetails)
  }
  //获取跟进情况
  getFollowupcandion(getfloowipcandion: fllowupObj) {
    return this.httpserve.get(api.getFllowCondition, getfloowipcandion)
  }
  //记录
  setRecord(setfollowContent: setfoolowContentObj) {
    return this.httpserve.post(api.setfollow, setfollowContent)
  }
}
