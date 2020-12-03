/** skip
 * Sirve para saltar u omitir x cantidad de emisiones iniciales
 * ejmplo: skip(3)
 * la primer emision que se tendria seria la cuarta
 */

import { interval, fromEvent } from "rxjs";
import { tap, takeUntil, skip } from "rxjs/operators";

 const boton = document.createElement('button');
 boton.innerHTML = 'Detener Timer';

 document.querySelector('body').append(boton);

 const counter$ = interval(1000);
 const clickBtn$ = fromEvent<MouseEvent >(boton, 'click').pipe(
     tap(()=>console.log('tap antes de skip')),
     skip(1),
     tap(()=>console.log('tap después de skip'))
 )

 counter$.pipe(
     tap(console.log),
     takeUntil(clickBtn$)
 ).subscribe({
     next: val => console.log('next', val),
     complete: () => console.log('complete')

 })