/** Scan
 * funciona como el reduce con la diferencia que 
 * cuando los valores son emitidos por el observable
 * inmediatamente van saliendo regresando su valor acumulado 
 */

import { from } from "rxjs";
import { reduce, tap, scan, map } from "rxjs/operators";

 const numeros = [1,2,3,4,5];
 const totalAcumulador = ( accumulator, currentValue ) => accumulator + currentValue;

 //Reduce
 from( numeros ).pipe(
     tap(console.log),
     reduce(totalAcumulador)
 )
 .subscribe({
     next: val => { console.log('val', val) },
     complete: () => {console.log('complete')}
 })

 //scan
 from( numeros ).pipe(
     tap(console.log),
     scan(totalAcumulador)
 )
 .subscribe({
     next: val => { console.log('val', val) },
     complete: () => {console.log('complete')}
 })

 // ejemplo redux
 // -- manejar el estado global de mi aplicacion en un unico objeto

 interface Usuario {
     id: string;
     autenticado: boolean;
     token?: string;
     edad?: number;
 }
 const user: Usuario[] = [
     { id: 'fher', autenticado:false, token:null },
     { id: 'fher', autenticado:true, token:'ABC' },
     { id: 'fher', autenticado:true, token:'ABC123' },
 ];
  
 const state$ = from( user ).pipe(
     scan<Usuario>( (acc, cur) => {
         return {...acc, ...cur}
     })
 )
//  .subscribe(console.log)

const id$ = state$.pipe(
    map(state => state.id)
)

id$.subscribe(console.log);

