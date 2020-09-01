import { fromEvent } from 'rxjs';
import { pluck } from 'rxjs/operators';

/**
 * Pluck = es similar al operador map, pero este sólo
   toma la propiedad requerida de cada objeto emitido.
 */

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    pluck('target','baseURI')
)
keyup$.subscribe(console.log);



