import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TamuItem } from '../../models/tamu-item/tamu-item.interface';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';

@IonicPage()
@Component({
  selector: 'page-add-tamu',
  templateUrl: 'add-tamu.html',
})
export class AddTamuPage {

  tamuItem = {}  as TamuItem;

  tamuItemRef$: FirebaseListObservable<TamuItem[]>

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private database: AngularFireDatabase) {
      this.tamuItemRef$ = this.database.list('tamu');
  }
  
  addTamuItem(tamuItem : TamuItem){
    this.tamuItemRef$.push({
      itemName: this.tamuItem.itemName,
      itemNumber: Number(this.tamuItem.itemNumber)

    });

    this.tamuItem = {} as TamuItem;

    this.navCtrl.pop();

  }

}
