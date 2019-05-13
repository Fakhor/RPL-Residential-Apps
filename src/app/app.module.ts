import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPageModule} from '../pages/tabs/tabs.module';
import { RegisterPage } from '../pages/register/register';
import { ProfilPageModule } from '../pages/profil/profil.module';
import { PaketPageModule } from '../pages/paket/paket.module';
import { PembayaranPageModule } from '../pages/pembayaran/pembayaran.module';
import { PengaturanPageModule } from '../pages/pengaturan/pengaturan.module';
import { TamuPageModule } from '../pages/tamu/tamu.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule, AngularFireStorageProvider } from 'angularfire2/storage';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { KebersihanPage } from '../pages/kebersihan/kebersihan';
import { KeamananPage } from '../pages/keamanan/keamanan';
import { NotifikasiPage } from '../pages/notifikasi/notifikasi';
import { EditprofilePage } from '../pages/editprofile/editprofile';
import { TentangPage } from '../pages/tentang/tentang';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { AddTamuPage } from '../pages/add-tamu/add-tamu';
import { EditTamuPage } from '../pages/edit-tamu/edit-tamu';

const firebaseAuth = {
  apiKey: "AIzaSyBdH-s2GvFHs1WMR_qtQTjzFq3xNk9EjQw",
  authDomain: "residentsauth.firebaseapp.com",
  databaseURL: "https://residentsauth.firebaseio.com",
  projectId: "residentsauth",
  storageBucket: "residentsauth.appspot.com",
  messagingSenderId: "146952137897"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    KebersihanPage,
    KeamananPage,
    NotifikasiPage,
    EditprofilePage,
    TentangPage,
    AddTamuPage,
    EditTamuPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ProfilPageModule,
    TabsPageModule,
    PaketPageModule,
    PembayaranPageModule,
    PengaturanPageModule,
    TamuPageModule,
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    KebersihanPage,
    KeamananPage,
    NotifikasiPage,
    EditprofilePage,
    TentangPage,
    AddTamuPage,
    EditTamuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
    AngularFireDatabase
    ]
})
export class AppModule {}
