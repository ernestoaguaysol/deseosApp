import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ListaItem } from '../../clases/index';

@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.html',
})
export class AgregarPage {

  nombreLista:string;
  nombreItem:string = "";

  items:ListaItem[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarPage');
  }

  agregar(){
    if (this.nombreItem.length == 0) {
      return;
    }
    let item = new ListaItem();
    item.nombre = this.nombreItem;

    this.items.push( item );
    this.nombreItem = "";
  }

  borrarItem(index: number){
    console.log('presiona el boton borrar');
    
    this.items.splice(index, 1);
  }

}
