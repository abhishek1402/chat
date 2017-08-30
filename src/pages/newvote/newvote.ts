
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TournamentPage } from "../tournament/tournament";
import { FormGroup } from "@angular/forms";
import { FormBuilder, Validators } from '@angular/forms';
import { loginService } from '../../service/newVote.service'
/**
 * Generated class for the NewvotePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newvote',
  templateUrl: 'newvote.html',
})
export class NewvotePage {
  [x: string]: any;
  newVoteForm:FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,private fb:FormBuilder,private newvote:loginService) {
    this.newVoteForm=this.fb.group({
      name:['',Validators.required],
      project:[''],
      workYesterday:[''],
      workToday:[''],
      Impediments:[''],
      discount:['']
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewvotePage');
  }
  log(x){
    console.log(x)
  }
  change(){
    this.navCtrl.push(TournamentPage);
    //for navigation we just have to use the nav function ionic and in it we have to provide the 
    //component in which we are going to navigate  
  }
  get name(){
    return this.newVoteForm.get('name')
  }
  submit(newVoteForm:FormGroup){
    console.log(newVoteForm);
    this.newvote.postLogin(newVoteForm).subscribe((res)=>{
      console.log(res);
    })
  }
}
