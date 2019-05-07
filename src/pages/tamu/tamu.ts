import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddTamuPage } from '../add-tamu/add-tamu'
/**
 * Generated class for the TamuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tamu',
  templateUrl: 'tamu.html',
})
export class TamuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navigateTamuPage(){
    this.navCtrl.push(AddTamuPage);

  }


}
