/** TakeWhile
 * Permite recibir valores mientras la condicion se cumpla
 */

import { fromEvent } from "rxjs";
import { map, tap, takeWhile } from "rxjs/operators";

 const click$ = fromEvent<MouseEvent>(document, 'click');

 click$.pipe(
     map( ({x, y}) => ({x, y})),
    //  takeWhile( event => event.x >= 10)
    //  takeWhile( ({y}) => y <= 150) //no imprime el valor que rompe la condicion 
     takeWhile( ({y}) => y <= 150, true) //muestra inclusive el valor que rompe la condicion 
 )
 .subscribe({
     next: val => console.log('next', val),
     complete: () => console.log('Complete')
 })