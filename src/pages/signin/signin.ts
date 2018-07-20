import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PointsofsalePage } from '../pointsofsale/pointsofsale';

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onGoToUsers(){}
  
  logIn(){
    this.navCtrl.push(PointsofsalePage);
  }
}
