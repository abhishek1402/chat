import { Sender } from './sender.class';
import { ContactDetailSerProvider } from './../../providers/contact-detail-ser/contact-detail-ser';
import { ChatPage } from './../chat/chat';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
/**
 * Generated class for the ContactDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact-details',
  templateUrl: 'contact-details.html',
})
export class ContactDetailsPage {
  contactDetails:any
  sender:Sender
  constructor(public navCtrl: NavController,public navParams: NavParams,public actionSheetCtrl:ActionSheetController,public contactDetailSerProvider:ContactDetailSerProvider) {
    this.contactDetails = this.navParams.data;
    this.sender = new Sender();
    this.sender.username= localStorage.getItem('username');
    this.sender.number=localStorage.getItem('number');
    this.sender.name = localStorage.getItem('name');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactDetailsPage');
  }
  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Call',
          icon:'call',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Message',
          icon:'chatboxes',
          handler: () => {
            
            this.navCtrl.push(ChatPage, this.contactDetails);
           
            this.contactDetailSerProvider.sendInfo(this.sender,this.contactDetails)
            .subscribe(res=>console.log(res))
          }
        },{
          text: 'Cancel',
          icon: 'close',
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
