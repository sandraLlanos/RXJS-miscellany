/** Sample 
 * permite obtener el ultimo valor emitido por el observable
 * hasta que el observable que se encuentra dentro de el emita un valor
 */

import { fromEvent, interval } from "rxjs";
import { sample } from "rxjs/operators";

const interval$ = interval(1000);
 const click$ = fromEvent<MouseEvent>(document,'click');

 interval$.pipe(
    sample(click$)

 ).subscribe(console.log);