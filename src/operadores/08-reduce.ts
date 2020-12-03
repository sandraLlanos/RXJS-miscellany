/** Reduce operator Reduce 
 *  aplica una funcion acumuladora a las emisiones producidas por el observable.
 *  devuelve el resultado acumulado cuando la fuente se completa
 *  no se tiene ninguna emision hasta que se complete el observable.
 */

import { interval } from "rxjs";
import { take, reduce, tap } from "rxjs/operators";

//  reduce en js
const numbers = [1,2,3,4,5];

const totalReducer = ( acumulador: number, valorActual: number) => {
    return acumulador + valorActual;
}

const total = numbers.reduce( totalReducer, 0 );
console.log('total arr', total);
//  reduce en js

// el operador take va a completar el observable despues de la contidad de veces que se 
// especifique sobre el. 
interval(1000).pipe(
    take(3),
    tap(console.log),
    reduce(totalReducer)
)
.subscribe({
    next:val => console.log('next', val),
    complete: () => console.log('Complete')
});