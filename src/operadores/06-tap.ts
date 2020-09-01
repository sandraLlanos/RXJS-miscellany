import { range } from 'rxjs';
import { tap, map } from 'rxjs/operators';

/** 
* tap =  para cada emisión en la fuente Observable, 
* devuelve un Observable que sea idéntico a la fuente.
* esto nos ayuda con el manejo y seguimiento de la información.
* me permite depuerar pues puedo ver el flujo de la información
*/

const numeros$ = range(1,5);

numeros$.pipe(
    tap( x => console.log('antes', x)),
    map( val => (val * 10).toString() ),
    tap({
        next: val => console.log('después', val),
        complete: () => console.log('complete')        
    })
    )

.subscribe( val => console.log('subscripción', val) )




