import { Component } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { Camera, CameraOptions, CameraOriginal } from '@ionic-native/camera'  
/**
 * Generated class for the UploadComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'upload',
  templateUrl: 'upload.html'
})
export class UploadComponent {

  text: AngularFireUploadTask;
  progress: any;
  image: string;

  constructor(public storage: AngularFireStorage,
              private camera: CameraOriginal) {}

  async captureImage() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA
    }

    return await this.camera.getPicture(options)
}
}
