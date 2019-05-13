import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-kebersihan',
  templateUrl: 'kebersihan.html',
})
export class KebersihanPage {

  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: Observable<string>;
  isHovering: boolean;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private storage: AngularFireStorage) {
  }


  
  ionViewDidLoad() {
    console.log('ionViewDidLoad KebersihanPage');
  }

  toggleHover(event: boolean){
    this.isHovering=event;
  }
 
  selectedFile=null;

  startUpload(event: FileList){
    const file = event.item(0)

    if(file.type.split('/')[0]!=='image'){
      console.error('unsupported file type :(')
      return;
    }
    // Storage path
    const path = `test/${new Date().getTime()}_${file.name}`;
    const customMetadata = { app: 'My AngularFire-powered PWA!'};

    //main task 
    this.task = this.storage.upload(path,file, {customMetadata})
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges();
    //file download URL 
    this.downloadURL = this.task.downloadURL(); 

    //Determines if upload task is active
  }
  isActive(snapshot){
    return snapshot.state=='running' && snapshot.bytesTransferred < snapshot.totalBytes

  }
  
}
