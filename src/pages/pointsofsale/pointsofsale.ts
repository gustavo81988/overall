import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import pos from '../../data/pos';
import { PointofsalePage } from '../pointofsale/pointofsale';

@IonicPage()
@Component({
  selector: 'page-pointsofsale',
  templateUrl: 'pointsofsale.html',
})
export class PointsofsalePage {
  posCollection
  pointofsalePage:PointofsalePage
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ngOnInit(){
    this.posCollection = pos;
  }
}
