import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaDeseosProvider } from '../../providers/lista-deseos/lista-deseos';
import { AgregarPage } from '../agregar/agregar';

@Component({
  selector: 'page-pendientes',
  templateUrl: 'pendientes.html',
})
export class PendientesPage {

  constructor(public _listaDeseos: ListaDeseosProvider,
    public navCtrl: NavController) {
  }

  toAgregar(){
    this.navCtrl.push(AgregarPage);
  }

  ionViewDidLoad() {
    console.log ('ionViewDidLoad PendientesPage');
  }

}
