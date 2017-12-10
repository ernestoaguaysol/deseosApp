import { Component } from '@angular/core';
import { NavController, NavParams, AlertController} from 'ionic-angular';
import { ListaItem, Lista } from '../../clases/index';
import { ListaDeseosProvider } from '../../providers/lista-deseos/lista-deseos';

@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.html',
})
export class AgregarPage {

  nombreLista:string = "";
  nombreItem:string = "";

  items:ListaItem[] = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public _listaDeseos: ListaDeseosProvider) {
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
    this.items.splice(index, 1);
  }

  guardarLista(){
    if (this.nombreLista.length == 0) {
      this.showAlert();
      return;
    }
    
    let lista = new Lista(this.nombreLista);
    lista.items = this.items;

    // this._listaDeseos.listas.push(lista);
    this._listaDeseos.agregarLista(lista);
    this.navCtrl.pop();
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Nombre de la lista',
      subTitle: 'El nombre de la lista es obligatorio',
      buttons: ['OK']
    });
    alert.present();
  }

}
