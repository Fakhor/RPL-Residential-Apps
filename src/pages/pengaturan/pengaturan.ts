import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { NotifikasiPage } from '../notifikasi/notifikasi';
import { EditprofilePage } from '../editprofile/editprofile';
import { TentangPage } from '../tentang/tentang';

@IonicPage()
@Component({
  selector: 'page-pengaturan',
  templateUrl: 'pengaturan.html',
})
export class PengaturanPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PengaturanPage');
  }

  signout() {
    this.navCtrl.setRoot(HomePage);
  }

  goNotifikasi() {
    this.navCtrl.push(NotifikasiPage);
  }

  goEditprofil() {
    this.navCtrl.push(EditprofilePage);
  }

  goTentang() {
    this.navCtrl.push(TentangPage);
  }
}
