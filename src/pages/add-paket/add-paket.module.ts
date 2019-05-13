import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPaketPage } from './add-paket';

@NgModule({
  declarations: [
    AddPaketPage,
  ],
  imports: [
    IonicPageModule.forChild(AddPaketPage),
  ],
})
export class AddPaketPageModule {}
