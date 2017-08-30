import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { urlClass } from './../../pages/url.class';
/*
  Generated class for the ContactServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ContactServiceProvider {

  constructor(public http: Http) {
    console.log('Hello ContactServiceProvider Provider');
  }
  getContact(value){

    return this.http.post(urlClass.url+"/contact",{"user":value})
    .map(res=>res.json())
  }
  getAllUser(){
    return this.http.get(urlClass.url+"/contact").map(res=>res.json())
  }
}
