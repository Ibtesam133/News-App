import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http , Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { NewsViewPage } from '../news-view/news-view';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public http : Http) {

  }
  
  getApi(){
// Random Net Data Api :      this.http.get("https://randomuser.me/api/?results=50").map(res =>res.json()).subscribe(data => {
// Articles                   this.http.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8a6d8f08e6824705b6177fdf31e1d724").map(res =>res.json()).subscribe(data => {
      this.http.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8a6d8f08e6824705b6177fdf31e1d724").map(res =>res.json()).subscribe(data => {
      debugger;
      this.navCtrl.push(NewsViewPage);
    })
  }

}
