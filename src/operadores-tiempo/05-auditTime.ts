/** AuditTime 
 * Emite el ultimo valor emitido por el observable en un periodo de tiempo
 * 
 */

import { fromEvent } from "rxjs";
import { auditTime, map, tap } from "rxjs/operators";

 const click$ = fromEvent<MouseEvent>(document,'click');

 click$.pipe(
    map(({x}) => x),
    tap(val => console.log('tap', val)),
    auditTime(1000)

 ).subscribe(console.log);