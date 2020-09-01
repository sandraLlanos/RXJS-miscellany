import { fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';


/** Encadenamiento de los observables
* los operadores se ejecutan de arriba hacia a abajo
*/
const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map( event =>  event.code ), // KeyboardEvent, string
    filter( key => key === 'Enter') // string, string
);

keyup$.subscribe(console.log);






