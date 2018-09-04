import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public items:any;

  constructor(public navCtrl: NavController, public HttpClient: HttpClient){
    this.loadData();
  }

  loadData(){
    let data:Observable<any>;
    data = this.HttpClient.get('https://laravel-web-service.herokuapp.com/api/user');
    data.subscribe(result =>{
      this.items =result;
    });  
  }

  openDetails(item) {
    this.navCtrl.push('DetalhePage', {item: item});
  }
  
}