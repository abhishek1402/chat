
import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class loginService{
    constructor(private http: Http){
        console.log('login intitialized');
    }
   
    // tslint:disable-next-line:one-line
    postLogin(value){
        const headers = new Headers();
        headers.append('Content-Type','application/json');
           console.log( "post");
        return this.http.post('http://ec2-52-207-64-40.compute-1.amazonaws.com:3000/newVote',value,{headers:headers})
      
        //   if(err.status === 500){
        //     return Observable.throw(new BadRequestError())
        //     }
        //     else
        //    return Observable.throw(new AppError(err));
        // we can write it here also but then we have to write it for all the 
        //function so we created a private function
        .map(res => {res.json()}
        );
    }
    
}
