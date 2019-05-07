import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})


export class RegisterPage {

  @ViewChild('user') user;
  @ViewChild('pass') password;

  constructor(private alertCtrl: AlertController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }
  register(){
    this.fire.auth.createUserWithEmailAndPassword(this.user.value + '@domain.xta', this.password.value)
    .then(data => {
      console.log('got data ', data);
      this.alert('Registered!');
      this.navCtrl.setRoot( HomePage );
    })

    .catch(error => {
      console.log('got an error',error);
      this.alert(error.message);
    });

  }
}
