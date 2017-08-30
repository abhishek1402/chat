import { urlClass } from './../../pages/url.class';
import { AppError } from './../../common/appError';
import { NotFoundError } from './../../common/notFound';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { errors } from "../../common/Error";
/*
  Generated class for the LoginServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class LoginServiceProvider {

  constructor(public http: Http) {
    console.log('Hello LoginServiceProvider Provider');
  }
  loginValidate(value){

    const headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post(urlClass.url+"/login",value,{headers:headers})
    .catch((err:Response)=>{
      if(err.status==404){
        return Observable.throw(new NotFoundError())
      }
      else{
        return Observable.throw(new errors(err))
      }
    })
  
   
  }
}
