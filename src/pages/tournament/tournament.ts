import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TournamentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tournament',
  templateUrl: 'tournament.html',
})
export class TournamentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TournamentPage');
  }
  backTo(){
    this.navCtrl.pop();
    // pop is used to push this page out of the stack so it can go back to the previous page
  }
}
