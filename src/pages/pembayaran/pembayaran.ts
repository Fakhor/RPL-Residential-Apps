import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { KebersihanPage } from '../kebersihan/kebersihan';
import { KeamananPage } from '../keamanan/keamanan';

@IonicPage()
@Component({
  selector: 'page-pembayaran',
  templateUrl: 'pembayaran.html',
})
export class PembayaranPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PembayaranPage');
  }
  goKebersihan(){
    this.navCtrl.push(KebersihanPage);
  }
  goKeamanan(){
    this.navCtrl.push(KeamananPage);
  }

}
