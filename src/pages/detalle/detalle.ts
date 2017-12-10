import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class DetallePage {

  idx: number;
  lista: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {
      this.idx = this.navParams.get('idx');
      this.lista = this.navParams.get('lista');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallePage');
  }

   

}
