/** Take
 *  sirve para limitar la cantidad de emisiones que un observable puede tener
 *  otra caracteristica es que cancela la ejecucion del observable
 */

import { of } from "rxjs";
import { take, tap } from "rxjs/operators";

const numeros$ = of(1,2,3,4,5);

numeros$.pipe(
    tap(t => console.log('valor tap', t)),
    take(3)
)
.subscribe({
    next: val => console.log('val', val),
    complete: () => console.log('complete')
})