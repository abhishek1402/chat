import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as io from 'socket.io-client'
import { urlClass } from './../../pages/url.class';
/*
  Generated class for the ChatProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ChatProvider {
  socket:any
  constructor(public http: Http) {
    console.log('Hello ChatProvider Provider');
     this.socket = io(urlClass.url);
  }
  sendMessage(msg,user)
  {
      this.socket.emit('message', {msg:msg,reciver:user,sender:localStorage.getItem('username')});
  }
    

}