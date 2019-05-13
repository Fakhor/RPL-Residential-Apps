import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
/**
 * Generated class for the EditTamuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import { TamuItem } from 
'../../models/tamu-item/tamu-item.interface';
import { TamuPage } from '../tamu/tamu';

@IonicPage()
@Component({
  selector: 'page-edit-tamu',
  templateUrl: 'edit-tamu.html',
})
export class EditTamuPage {

  tamuItemRef$: FirebaseObjectObservable<TamuItem>;
  tamuItem = {} as TamuItem;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private database: AngularFireDatabase) {
      
      const tamuItemId = this.navParams.get('tamuItemId');

      console.log(tamuItemId);

      this.tamuItemRef$ = this.database.object(`tamu/${tamuItemId}`);

      this.tamuItemRef$.subscribe(
        tamuItem => this.tamuItem = tamuItem);
  }

  updateTamuItem(tamuItem : TamuItem){
    this.tamuItemRef$.update(tamuItem);
    this.navCtrl.push( TamuPage );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditTamuPage');
  }

}
