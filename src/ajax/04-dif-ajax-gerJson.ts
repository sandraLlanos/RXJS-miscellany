
/** Diferencias entre GetJson y Ajax
 * GetJson: se obtiene la información propiamente de la respuesta
 * Ajax: se obtiene mayor información de la respuesta
 */
import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

const url = 'https://h5ttpbin.org/delay/1';

const manejaError = (resp:AjaxError) => {
   console.warn('error', resp.message);
   return of({
      ok:false,
      usuarios:[]
   });
}
// const obsJson$ =  ajax.getJSON(url).pipe(
//    catchError(manejaError)
// );
// const obsAjax$ =  ajax(url).pipe(
//    catchError(manejaError)
// );
const obsJson$ =  ajax.getJSON(url);
const obsAjax$ =  ajax(url);


// también se puede hacer el manejo de errores por en el subscribe
obsJson$.pipe(
   catchError(manejaError)
).subscribe({
   next: val => console.log('next', val),
   error: err => console.log('error en subs', err),
   complete: () => console.log('complete')
});
obsAjax$.subscribe(data => console.log('data',data));

//si se maneja con el catch error no se dispara el error del 
//subscribe, en ese caso el nuevo observable se completa



