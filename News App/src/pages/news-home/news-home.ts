import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsViewPage } from '../news-view/news-view';

/**
 * Generated class for the NewsHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news-home',
  templateUrl: 'news-home.html',
})
export class NewsHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToNews(param){
    this.navCtrl.push(NewsViewPage , {NewsName : param })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsHomePage');
  }

}
