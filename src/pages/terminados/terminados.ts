import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaDeseosProvider } from '../../providers/lista-deseos/lista-deseos';
import { AgregarPage } from '../agregar/agregar';
import { DetallePage } from '../detalle/detalle';
import { Lista } from '../../clases/index';

@Component({
  selector: 'page-terminados',
  templateUrl: 'terminados.html',
})
export class TerminadosPage {

  constructor(
    public _listaDeseos: ListaDeseosProvider,
    public navCtrl: NavController
  ) {}

  verDetalle(lista: Lista, idx: number) {
    this.navCtrl.push(DetallePage, { lista, idx })
  }

}
