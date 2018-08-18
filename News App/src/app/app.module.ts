import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { NewsViewPage } from '../pages/news-view/news-view';
import { NewsHomePage } from '../pages/news-home/news-home';
import {AngularFireModule} from 'angularfire2'
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
// import {  FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';


  

const firebase = {
  apiKey: "AIzaSyAPSCej4lfVCFDF7ov6xaepQur3xjjb_vs",
  authDomain: "fir-eda9b.firebaseapp.com",
  databaseURL: "https://fir-eda9b.firebaseio.com",
  projectId: "fir-eda9b",
  storageBucket: "fir-eda9b.appspot.com",
  messagingSenderId: "878556270466"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    NewsHomePage,
    NewsViewPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    NewsHomePage,
    NewsViewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
