import { urlClass } from './../../pages/url.class';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AddContactProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AddContactProvider {

  constructor(public http: Http) {
    console.log('Hello AddContactProvider Provider');
  }
  save(contact){
    debugger;
    return this.http.post(urlClass.url+'/contact/addContact',{contact:contact,user:localStorage.getItem('username')})
    .map((res)=>res.json())
  }
}
