import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaketItem } from '../../models/paket-item/paket-item.interface';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';

@IonicPage()
@Component({
  selector: 'page-add-paket',
  templateUrl: 'add-paket.html',
})
export class AddPaketPage {

  paketItem = {}  as PaketItem;

  paketItemRef$: FirebaseListObservable<PaketItem[]>

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private database: AngularFireDatabase) {
      this.paketItemRef$ = this.database.list('paket');
  }

  addPaketItem(paketItem : PaketItem){
    this.paketItemRef$.push({
      itemName: this.paketItem.itemName,
      itemNumber: Number(this.paketItem.itemNumber)

    });

    this.paketItem = {} as PaketItem;

    this.navCtrl.pop();

  }

}
