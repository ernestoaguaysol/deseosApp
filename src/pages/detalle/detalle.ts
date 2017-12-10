import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Lista, ListaItem } from '../../clases/index';
import { ListaDeseosProvider } from '../../providers/lista-deseos/lista-deseos';


@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class DetallePage {

  idx: number;
  lista: Lista;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public _listaDeseos: ListaDeseosProvider,
              public alertCtrl: AlertController) {
      this.idx = this.navParams.get('idx');
      this.lista = this.navParams.get('lista');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallePage');
  }

  actualizar(item: ListaItem){

    item.completado = !item.completado;

    let todosMarcados = true;
    for (let index of this.lista.items) {
      if(!item.completado){
        todosMarcados = false;
        break;
      }
    }

    this.lista.terminada = todosMarcados; 

    this._listaDeseos.actualizarData();

  }

  borrarItem() {
    let confirm = this.alertCtrl.create({
      title: '¿Desea borrar la lista?',
      message: 'la lista será borrada y ya no prodrá recuperarla',
      buttons: ['Cancelar',
        {
          text: 'Aceptar',
          handler: () => {
            this._listaDeseos.eliminarLista(this.idx);
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();
  }
   

}
