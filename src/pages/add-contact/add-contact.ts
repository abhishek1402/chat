import { ContactPage } from './../contact/contact';
import { AddContactProvider } from './../../providers/add-contact/add-contact';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddContactPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-contact',
  templateUrl: 'add-contact.html',
})
export class AddContactPage {
  contactDetails:any
  constructor(public navCtrl: NavController, public navParams: NavParams,public addcontactProvider:AddContactProvider) {
    this.contactDetails = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddContactPage');
  }
  addThisContact(){
    this.addcontactProvider.save(this.contactDetails).subscribe(res=>{this.navCtrl.pop();this.navCtrl.push(ContactPage);})
  }
}
