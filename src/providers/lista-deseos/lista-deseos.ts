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
    let lista1 = new Lista('compras de super');
    let lista2 = new Lista('juegos de deseo');
    let lista3 = new Lista('cosas de la uni');

    this.listas.push(lista1);
    this.listas.push(lista2);
    this.listas.push(lista3);

    
  }

}
