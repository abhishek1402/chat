import { SignupPage } from './../signup/signup';
import { ContactPage } from './../contact/contact';
import { LoginModalPage } from './../login-modal/login-modal';
import { errors } from './../../common/Error';
import { AppError } from './../../common/appError';
import { ModalController } from 'ionic-angular';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import {validation} from '../../common/emailValid'
import { LoginServiceProvider } from "../../providers/login-service/login-service";
import { NewvotePage } from "../newvote/newvote";
import { NotFoundError } from "../../common/notFound";
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginForm:FormGroup;
  user
  constructor(private menuCtrl:MenuController, private modalCtrl: ModalController, private navCtrl: NavController, public navParams: NavParams,fb:FormBuilder,private loginserviceProvider:LoginServiceProvider) {
    this.loginForm = fb.group({
      email:['',(Validators.required,validation.emailValid)],
      password:['',Validators.required]
    })
     this.menuCtrl.enable(false);
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  get email(){
   return this.loginForm.get('email');
  }
  get password(){
   return this.loginForm.get('password');
  }
  log(x){
 
    console.log(x);
  }
  clicked(){
    this.navCtrl.push(SignupPage);
  }
  submit(f:FormGroup){
    this.loginserviceProvider.loginValidate(f).
    subscribe((respose)=>{
   
      this.user =respose.json()
      
      localStorage.setItem('username',this.user.username);
      localStorage.setItem('name',this.user.name);
      localStorage.setItem('number',this.user.number)
      this.navCtrl.push(ContactPage);
    }
    ,(err:errors)=>{
     
      if(err instanceof NotFoundError){
        let myModal = this.modalCtrl.create(LoginModalPage);
        myModal.present();
      }
      else{
        throw(err);
      }
    });
  }
}
