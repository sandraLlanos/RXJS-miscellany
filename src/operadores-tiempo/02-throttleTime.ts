/** throttleTime
 * Su funcionamiento es similar a debounceTime pero este
 * en cuanto emite un valor comienza a contar la cantidad de tiempo
 * especificicado en el argumento, anulando todas las emisiones durante
 * ese tiempo
 * throttletTime(1000)
 * 
 * debounceTime: espera 3 segundos despues emite el valor
 * throttleTime: emite el valor y luego espera los 3 segundos
 */

import { fromEvent, asyncScheduler } from "rxjs";
import { throttleTime, map, pluck, distinctUntilChanged, throttle } from "rxjs/operators";

 const click$ = fromEvent( document, 'click' );

 click$.pipe(
    throttleTime(3000)
  )
//   .subscribe({
//     next: val => console.log('next', val),
//     complete: () => console.log('complete')
//  });

 //ejemplo 2
 const input = document.createElement('input');
 const body =  document.querySelector('body');
 body.append(input);

 const input$ = fromEvent<KeyboardEvent>( input, 'keyup').pipe(
     throttleTime(1000, asyncScheduler,{
         leading:true,//el primer elemento 
         trailing:true // el ultimo elemento 
     }),
     pluck('target','value'),
     distinctUntilChanged()
 )
 .subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete')
})