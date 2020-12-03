
/** Peticiones usando Ajax de Rxjs */

/** CatchError
 * sirve para atrapar cualquier error que sucesa en el observable
 * catchError( atrapaError )
 * puede emitir un mensaje de error o
 * retornar un nuevo observable que puede emitir cualquier valor
 */

import { ajax, AjaxError } from 'rxjs/ajax';
import { map, pluck, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const url = 'https://api.github.com/users?per_page=5';

const atrapaError = (err:AjaxError) => {
   console.warn('error en', err.message);
   return of({});
 }

ajax(url).pipe(
   pluck('response'),
   // map(resp => resp.response),
   catchError(atrapaError)
).subscribe(users => console.log('usuarios:', users));





