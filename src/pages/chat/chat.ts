
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as io from 'socket.io-client';
import { urlClass } from './../../pages/url.class';
/**
 * Generated class for the ChatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage implements OnInit {
  user;
  connection;
  messages=[];
   socket:any
   sent:any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
     this.user = this.navParams.data;
  }

 
  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }
  send(msg){
    this.messages.push({msg:msg,sender:true});
    console.log(this.messages)
    this.socket.emit('message', {msg:msg,reciver:this.user,sender:localStorage.getItem('username')});
  }
  ngOnInit() {
    
   
    this.socket = io(urlClass.url);
    this.socket.emit('user', {reciver:this.user,sender:localStorage.getItem('username')})
    this.socket.on('userList',(list)=>{
    
      console.log(list);
    })
    this.socket.on('sendMsg', (msg) => {
      
      console.log("sendMsg", msg);
     this.messages.push({msg:msg,sender:false})
    });

  }
  ionViewWillLeave(){
    this.socket.disconnect();
  }
}
