import { AddContactPage } from './../add-contact/add-contact';
import { ContactDetailsPage } from './../contact-details/contact-details';
import { ContactServiceProvider } from './../../providers/contact-service/contact-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the ContactPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  user
  myInput:any
  contactList=[];
  allUser = [];
  allUserArray=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController,public contactServiceProvider:ContactServiceProvider) {
    this.user = localStorage.getItem('username')
    this.contactServiceProvider.getContact(this.user).subscribe(res=>{this.contactList= res;console.log(res);});
    
  }

  ionViewDidLoad() {
    this.contactServiceProvider.getAllUser().subscribe(res=>{this.allUser = res;console.log(res);});
    console.log('ionViewDidLoad ContactPage');
  }
  tapped(e,contact){
    
    this.navCtrl.push(ContactDetailsPage,contact)
  }
  addContact(user){
    debugger;
    var contactExits=this.contactList.find(function(contact){	
      if(contact.username == user.username)	{return true}
      else return false;
    })
    if(contactExits==undefined)
    {this.navCtrl.push(AddContactPage,user)}
    else{
      this.presentAlert()
    }
  }
  onInput(e){
    
    this.allUserArray=[];
    if(e!="")
    {
      this.allUserArray = this.allUser.filter(user=>{
      if(user.name.toLowerCase().indexOf(e)>=0){
        return true;
      }
      else{
        return false;
      }
    })
  }
  }
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'User exists',
      subTitle: 'Sorry but this Contact already exists ',
      buttons: ['Dismiss']
    });
    alert.present();
  }

}
