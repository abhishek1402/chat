import { NotFoundError } from './../../common/notFound';
import { urlClass } from './../../pages/url.class';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { errors } from "../../common/Error";
/*
  Generated class for the SignupProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class SignupProvider {

  constructor(public http: Http) {
    console.log('Hello SignupProvider Provider');
  }
  signup(formValue)
  {
    return this.http.post(urlClass.url+'/signup',formValue)
    .catch((err:Response)=>{
      if(err.status==400){
        return Observable.throw(new NotFoundError())
      }
      else{
        return Observable.throw(new errors(err))
      }
    })
  }

}
