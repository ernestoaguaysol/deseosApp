import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../../clases/index';

@Pipe({
  name: 'pendientes',
  pure: false
})
export class PendientesPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(listas: Lista[], estado: boolean = false): Lista[] {
    
    
    let nuevaLista:Lista[] = [] 
    for(let lista of listas){
      if(lista.terminada == estado){
        nuevaLista.push(lista);
      }
    }
    return nuevaLista;

    // return listas.filter((lista) => lista.terminada === estado);
  }
}
