import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import pos from '../../data/pos';

@IonicPage()
@Component({
  selector: 'page-pointsofsale',
  templateUrl: 'pointsofsale.html',
})
export class PointsofsalePage {
  posCollection;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ngOnInit(){
    this.posCollection = pos;
    console.log(pos)
  }
}
