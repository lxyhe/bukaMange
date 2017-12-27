import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ActionSheetController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpLodingService } from '../../providers/loadingServer';
import { ajaxService } from '../../providers/ajaxServe';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Clipboard } from '@ionic-native/clipboard';
import { Toast } from '@ionic-native/toast';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
@IonicPage()
@Component({
  selector: 'page-private-floow',
  templateUrl: 'private-floow.html',
})
export class PrivateFloowPage {
  public fllowUpObj: object;
  public tokenid: string = "";
  public customer_id: any = "";
  public followUpList: any = "";

  public followUpAvatar: any = "assets/imgs/timg1.jpg";
  public followUpPhone: any = "";
  public followUpWechat: any = "";
  public followUpName: any = "";
  public followUpLinkCantact: any = "";
  public userid: number;
  public message: string = "";
  public isNoData: boolean = false;
  constructor(
    public navCtrl: NavController,
    public navparam: NavParams,
    //public event: Events,
    public actionSheetCtrl: ActionSheetController,
    private storage: Storage,
    public httploading: HttpLodingService,
    public ajaxserve: ajaxService,
    public alertCtrl: AlertController,
    private camera: Camera,
    private clipboard: Clipboard,
    private toast: Toast,
    private contacts: Contacts
  ) {
    this.fllowUpObj = this.navparam.get('datas')
    console.log(this.fllowUpObj);
    this.customer_id = this.fllowUpObj['customer_id'];
    this.followUpAvatar = this.fllowUpObj['avatar'];
    this.followUpPhone = this.fllowUpObj['phone'];
    this.followUpWechat = this.fllowUpObj['wechat'];
    this.followUpName = this.fllowUpObj['name'];
    this.followUpLinkCantact = this.fllowUpObj['linkCantact'];

  }

  ionViewDidEnter() {
    this.getFlowUpList();
  }
  getFlowUpList() {
    try {
      this.storage.get('userInfo').then((data) => {
        this.tokenid = data.tokenid;
        this.httploading.HttpServerLoading("更新中...")
        this.ajaxserve.getFollowupcandion({ tokenid: this.tokenid, customer_id: this.customer_id }).then((data) => {
          if (data.status.Code == "200") {
            this.httploading.ColseServerLoding();
            console.log(data);
            if (data.data.length == 0) {
              this.isNoData = true;
            } else {
              this.isNoData = false;
            }
            this.followUpList = data.data;
          }
        }).catch((err) => {
          console.log(err);
        })
      })
    }
    catch (err) {
      console.log(err);
    }
  }
  setrecord() {
    try {
      this.storage.get('userInfo').then((data) => {
        this.tokenid = data.tokenid;
        this.userid = data.userid;
        // this.httploading.HttpServerLoading("...")
        this.ajaxserve.setRecord({ customer_id: this.customer_id, follow_up_name: this.message, userid: this.userid, tokenid: this.tokenid }).then((data) => {
          if (data.status.Code == "200") {
            //this.httploading.ColseServerLoding();
            console.log(data);
            this.getFlowUpList();
            this.message = "";
          }
        }).catch((err) => {
          console.log(err);
        })
      })
    }
    catch (err) {
      console.log(err);
    }
  }

  link() {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: '呼叫',
          role: 'links',
          handler: () => {
            window.open("tel:" + this.followUpPhone);
          }
        }, {
          text: '复制号码',
          role: 'copy',
          handler: () => {
            console.log("111")
            this.clipboard.copy(this.followUpPhone);
            this.toast.show(`复制号码成功`, '2000', 'center').subscribe(
              toast => {
                console.log(toast);
              }
            );

          }
        }, {
          text: '添加到通讯录',
          role: 'addlink',
          handler: () => {
            let contact: Contact = this.contacts.create();
            contact.name = new ContactName(null, this.followUpLinkCantact);
            contact.phoneNumbers = [new ContactField('电话', this.followUpPhone)];
            contact.save().then(
              () => {
                this.toast.show(`添加联系人成功`, '2000', 'center').subscribe(
                  toast => {
                    console.log(toast);
                  }
                );
              },
              (error: any) => {
                this.toast.show(`添加联系人失败`, '2000', 'center').subscribe(
                  toast => {
                    console.log(toast);
                  }
                );
              }
            );

          }
        },
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
