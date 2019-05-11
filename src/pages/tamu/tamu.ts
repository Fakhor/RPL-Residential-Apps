import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { AddTamuPage } from '../add-tamu/add-tamu';
import { EditTamuPage } from '../edit-tamu/edit-tamu';
import { FirebaseListObservable, AngularFireDatabase } from "angularfire2/database-deprecated";
import { TamuItem } from '../../models/tamu-item/tamu-item.interface';


@IonicPage()
@Component({
  selector: 'page-tamu',
  templateUrl: 'tamu.html',
})
export class TamuPage {

  tamuList= {} as  TamuItem;

  tamuListRef$: FirebaseListObservable<TamuItem[]>
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private database: AngularFireDatabase, 
    private actionSheetCtrl: ActionSheetController) {

      
    this.tamuListRef$ = this.database.list('tamu');
  }

  selectTamu(tamuItem : TamuItem){
    this.actionSheetCtrl.create({
      title: `${tamuItem.itemName}`,
      buttons: [
        {
          text: 'Edit',
          handler: ()=> {
            //send teh user to the edittamuitempage anss pass the key as aa paramenter
            this.navCtrl.push(EditTamuPage, 
              { tamuItemId : tamuItem.$key });
          }
        },
        {
            text: 'Delete',
            role: 'destructive',
            handler:()=>{
            this.tamuListRef$.remove(tamuItem.$key);
          }
        },
        {
            text: 'Cancel',
            role: 'cancel',
            handler: ()=>{
              console.log("User udah cancel buttonnya");
            }
        }
      ]
    }).present();
  }

  navigateTamuPage(){
    this.navCtrl.push(AddTamuPage);

  }


}
