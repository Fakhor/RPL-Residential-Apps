import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
/**
 * Generated class for the EditTamuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import { PaketItem } from
'../../models/paket-item/paket-item.interface';
import { PaketPage } from '../paket/paket';

@IonicPage()
@Component({
  selector: 'page-edit-paket',
  templateUrl: 'edit-paket.html',
})
export class EditPaketPage {

  paketItemRef$: FirebaseObjectObservable<PaketItem>;
  paketItem = {} as PaketItem;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private database: AngularFireDatabase) {

      const paketItemId = this.navParams.get('paketItemId');

      console.log(paketItemId);

      this.paketItemRef$ = this.database.object(`paket/${paketItemId}`);

      this.paketItemRef$.subscribe(
        paketItem => this.paketItem = paketItem);
  }

  updatePaketItem(paketItem : PaketItem){
    this.paketItemRef$.update(paketItem);
    this.navCtrl.push( PaketPage );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPaketPage');
  }

}
