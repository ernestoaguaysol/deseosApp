import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaDeseosProvider } from '../../providers/lista-deseos/lista-deseos';

@Component({
  selector: 'page-pendientes',
  templateUrl: 'pendientes.html',
})
export class PendientesPage {

  constructor(public _listaDeseos: ListaDeseosProvider,
    public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log ('ionViewDidLoad PendientesPage');
  }

}
