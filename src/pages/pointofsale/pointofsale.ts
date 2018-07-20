import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pointofsale',
  templateUrl: 'pointofsale.html',
})
export class PointofsalePage implements OnInit{
  posGroup;

  ngOnInit(){
    this.posGroup = this.navParams.data
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}
