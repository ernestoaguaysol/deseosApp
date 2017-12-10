import { Injectable } from '@angular/core';
import { Lista } from '../../clases/listas';
/*
  Generated class for the ListaDeseosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListaDeseosProvider {
  listas:Lista[] = [];


  constructor() {
    console.log('servicio inicializado');
    // let lista1 = new Lista('compras de super');
    // let lista2 = new Lista('juegos de deseo');
    // let lista3 = new Lista('cosas de la uni');

    // this.listas.push(lista1);
    // this.listas.push(lista2);
    // this.listas.push(lista3);

    this.cargarData();
  }

  actualizarData(){
    localStorage.setItem("data", JSON.stringify(this.listas));
  }

  cargarData(){
    this.listas = JSON.parse(localStorage.getItem('data')) || [];
  }

  agregarLista(lista:Lista){
    this.listas.push(lista);
    this.actualizarData();
  }

  eliminarLista(idx: number){
    this.listas.splice(idx,1);
    this.actualizarData();
  }

}
