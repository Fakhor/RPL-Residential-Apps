import { Component, ViewChild } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('user') user;
  @ViewChild('pass') pass;
  
  username:string;
  password:string;
  constructor(private alertCtrl: AlertController, private fire:AngularFireAuth, public navCtrl: NavController) {
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  login(){
    this.fire.auth.signInWithEmailAndPassword(this.user.value, this.pass.value)
    .then( data => {
      console.log('got some data', data);
      this.alert('Success! You\'re logged in');
      this.navCtrl.setRoot( 'TabsPage' );
    })

    .catch(error => {
      console.log('got an error', error);
      this.alert(error.message);
    })

  }

  goRegister(){
    this.navCtrl.push(RegisterPage);
  }

}
