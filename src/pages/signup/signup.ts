import { LoginPage } from './../login/login';
import { NotFoundError } from './../../common/notFound';
import { SignupProvider } from './../../providers/signup/signup';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {validation} from '../../common/emailValid';
import { AlertController } from 'ionic-angular';
import 'rxjs/add/operator/catch';
/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage implements OnInit {
  [x: string]: any;
  signupForm: FormGroup
  constructor(private alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams,private fb:FormBuilder,public signupProvider:SignupProvider) {
    
    
  }

  ngOnInit() {
    debugger;
    console.log('ionViewDidLoad SignupPage');
    this.signupForm=this.fb.group(
      {
        email:['',(Validators.required,validation.emailValid)],
        name:['',Validators.required],
        number:['',(Validators.required,Validators.pattern("^(0|[1-9][0-9]*)$"))],
        password:['',Validators.required]
      }
    )
  }
  log(x){
    console.log(x)
  }

  submit(form){
    debugger;
    this.signupProvider.signup(form).subscribe(res=>{
      this.login();
    },
    (err:Response)=>{
      if(err instanceof NotFoundError)
        this.presentAlert();
    })
  }
  presentAlert() {
  let alert = this.alertCtrl.create({
    title: 'User exists',
    subTitle: 'Sorry but user exists with this username',
    buttons: ['Dismiss']
  });
  alert.present();
}
login() {
  let alert = this.alertCtrl.create({
    title: 'Login',
    subTitle: 'Now Login with your email and password',
    buttons: [
      {
        text: 'Login',
        handler: () => {
          this.navCtrl.pop();
        }
      }]
  });
  alert.present();
}

     get email(){
     return this.signupForm.get('email');
    }
    get password(){
     return this.signupForm.get('password');
    }
    get name(){
     return this.signupForm.get('name');
    }
    get number(){
     return this.signupForm.get('number');
    }
}
