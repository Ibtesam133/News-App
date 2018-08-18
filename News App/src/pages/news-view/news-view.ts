import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http , Headers} from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the NewsViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news-view',
  templateUrl: 'news-view.html',
})
export class NewsViewPage {

  public NewsArray = [];
  public API = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, public http : Http) {
    this.callingAPI();
  }


  
  callingAPI(){
    if(this.navParams.get('NewsName') == 1){
      // ARY
      this.API = "https://newsapi.org/v2/top-headlines?sources=ary-news&apiKey=8a6d8f08e6824705b6177fdf31e1d724";
    }
    else if(this.navParams.get('NewsName') == 2){
      // bbc
      this.API = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=8a6d8f08e6824705b6177fdf31e1d724";
    }
    else if(this.navParams.get('NewsName') == 3){
      // abc
      this.API = "https://newsapi.org/v2/top-headlines?sources=abc-news-au&apiKey=8a6d8f08e6824705b6177fdf31e1d724";
    }
    else if(this.navParams.get('NewsName') == 4){
      // espn
      this.API = "https://newsapi.org/v2/top-headlines?sources=espn&apiKey=8a6d8f08e6824705b6177fdf31e1d724";
    }
    else if(this.navParams.get('NewsName') == 5){
      // CNBN
      this.API = "https://newsapi.org/v2/top-headlines?sources=cnbc&apiKey=8a6d8f08e6824705b6177fdf31e1d724";
    }
    else if(this.navParams.get('NewsName') == 6){
      // Google News
      this.API = "https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=8a6d8f08e6824705b6177fdf31e1d724";
    }
    this.http.get(this.API)
    .map(res =>res.json())
    .subscribe(data => {
      
      this.NewsArray = data.articles;
      debugger;

    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsViewPage');
  }

}
