import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaDeseosProvider } from '../../providers/lista-deseos/lista-deseos';
import { AgregarPage } from '../agregar/agregar';
import { DetallePage } from '../detalle/detalle';
import { Lista } from '../../clases/index';

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

  verDetalle(lista:Lista , idx:number){
    this.navCtrl.push(DetallePage,{lista,idx})
  }

}
