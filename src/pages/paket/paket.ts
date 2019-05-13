import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { AddPaketPage } from '../add-paket/add-paket';
import { EditPaketPage } from '../edit-paket/edit-paket';
import { FirebaseListObservable, AngularFireDatabase } from "angularfire2/database-deprecated";
import { PaketItem } from '../../models/paket-item/paket-item.interface';


@IonicPage()
@Component({
  selector: 'page-paket',
  templateUrl: 'paket.html',
})
export class PaketPage {

  paketList= {} as  PaketItem;

  paketListRef$: FirebaseListObservable<PaketItem[]>

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private database: AngularFireDatabase,
    private actionSheetCtrl: ActionSheetController) {


    this.paketListRef$ = this.database.list('paket');
  }

  selectTamu(paketItem : PaketItem){
    this.actionSheetCtrl.create({
      title: `${paketItem.itemName}`,
      buttons: [
        {
          text: 'Edit',
          handler: ()=> {
            //send teh user to the edittamuitempage anss pass the key as aa paramenter
            this.navCtrl.push(EditPaketPage,
              { paketItemId : paketItem.$key });
          }
        },
        {
            text: 'Delete',
            role: 'destructive',
            handler:()=>{
            this.paketListRef$.remove(paketItem.$key);
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

  navigatePaketPage(){
    this.navCtrl.push(AddPaketPage);

  }


}
