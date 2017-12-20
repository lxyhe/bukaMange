export const address = "http://192.168.10.186:8080/";

export const api = {
  logingapi: address + "login/islogin",
  companlist: address + "team/getteam",
  grounplist: address + "team/getteammember",
  prvateCilentlist: address + "team/getcustomer",
  publicClientlist: address + "customer/common",
  inspectorlist: address + "director/getteammember",
  personclientlist: address + "personal/getcustomer",
  publishclientInfo: address + "customer/publish",
  publicGetCilent: address + "customer/getcustomer",
  getClientDetails: address + "personal/cusinformation",
  getFllowCondition: address + "personal/getfollow",
  setfollow: address + "personal/setfollow",
  publicSearch: address + "customer/common",
  movetoPublish: address + "personal/setcustomer",

  modifiterClientType: address + "personal/editctype",//修改客户类型 post
  modifiterClientRemark: address + "personal/editremarks",//修改客户备注 post
  modifiterClientSource: address + "personal/editsource",//修改客户来源 post
  modifiterClientLevel: address + "personal/editlevel",//修改客户级别 post
  modifiterClientNeed: address + "personal/editneeds",//修改客户需求 post
  modifiterClientStatus: address + "personal/editstatus",//修改客户状态 post
  modifiterClientAddress: address + "personal/editaddress",//修改客户状态 post

  modifiterSex: address + "personal/editpersex",
  modifiterName: address + "personal/editperrname"


}

