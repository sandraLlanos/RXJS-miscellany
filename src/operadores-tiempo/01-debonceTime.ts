/** debounceTime
 * Nos ayuda a poder contar cuantas milesimas de segundo
 * han pasado desde la ultima emisión
 * si las milesimas de segundo sobrepasan el parametro que se tiene
 * entre parentesis entonces emitira dicho valor
 * 
 * nos ayuda a restringir la cantidad de emisiones en nuestro observable
 * inicial
 * 
 * ejemplo debounceTime(1000)
 */

import { fromEvent } from "rxjs";
import { debounceTime, pluck, distinctUntilChanged } from "rxjs/operators";

 const click$ = fromEvent( document, 'click' );

 click$.pipe(
     debounceTime(1000)
  )//.subscribe({
//     next: val => console.log('next', val),
//     complete: () => console.log('complete')
//  });

 //ejemplo 2

 const input = document.createElement('input');
 const body =  document.querySelector('body');
 body.append(input);

 const input$ = fromEvent<KeyboardEvent>( input, 'keyup').pipe(
     debounceTime(1000),
     pluck('target','value'),
     distinctUntilChanged()
 )
 .subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete')
})