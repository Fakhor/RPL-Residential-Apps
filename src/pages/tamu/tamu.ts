import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddTamuPage } from '../add-tamu/add-tamu'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { TamuItem } from '../../models/tamu-item/tamu-item.interface';


@IonicPage()
@Component({
  selector: 'page-tamu',
  templateUrl: 'tamu.html',
})
export class TamuPage {

  tamuListRef$: FirebaseListObservable<TamuItem[]>
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private database: AngularFireDatabase) {

     this.tamuListRef$ = this.database.list('tamu');
  }

  navigateTamuPage(){
    this.navCtrl.push(AddTamuPage);

  }


}
