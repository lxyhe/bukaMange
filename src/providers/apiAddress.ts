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
  publicGetCilent: address + "customer/getcustomer"
  // http://192.168.10.186:8080/customer/publish
}
// http://192.168.10.186:8080/customer/common/{tokennid}?userid=1
//http://192.168.10.186:8080/personal/getcustomer
