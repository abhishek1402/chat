import { urlClass } from './../../pages/url.class';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ContactDetailSerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ContactDetailSerProvider {

  constructor(public http: Http) {
    console.log('Hello ContactDetailSerProvider Provider');
  }
  sendInfo(senderInfo,reciverInfo){
   
    return this.http.post(urlClass.url+"/contactdetail",{reciever:reciverInfo,sender:senderInfo})
  }
}
