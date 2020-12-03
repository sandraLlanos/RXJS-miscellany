/** First
 *  first(): toma el primer valor y completa el observable
 *  first(x => x >= 10) se va a completar cuando x sea > = 10
 */

import { fromEvent } from "rxjs";
import { first, take, tap, map } from "rxjs/operators";

 const click$ = fromEvent<MouseEvent>(document, 'click');

 click$.pipe( 
    //  take(1)
    //  first()
    //  tap<MouseEvent>(client => console.log(client.clientY)),
    //  first<MouseEvent>(event => event.clientY >= 150)
    
     tap<MouseEvent>(console.log),
    //  map( event => ({
    //      clientY: event.clientY,
    //      clientX: event.clientX
    //  }) ),
     map( ({clientX, clientY}) => ({clientY,clientX}) ),
     first( event => event.clientY >= 150 )
 )
 .subscribe({
     next: val => console.log('next', val),
     complete: () => console.log('complete')
 });

