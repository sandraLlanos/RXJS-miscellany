/** takeUntil
 * recibe como argumento otro obervable
 * ejem: take(click$)
 * cuando el evento se emite o algun valor de ese observable,
 *  la salida se completa 
 *  (sigue recibiendo los valores y sigue emitiendo hasta
 *  que el segundo observable emita su valor)
 */

import { interval, fromEvent } from "rxjs";
import { tap, takeUntil } from "rxjs/operators";

 const boton = document.createElement('button');
 boton.innerHTML = 'Detener Timer';

 document.querySelector('body').append(boton);

 const counter$ = interval(1000);
 const clickBtn$ = fromEvent<MouseEvent >(boton, 'click');

 counter$.pipe(
     tap(console.log),
     takeUntil(clickBtn$)
 ).subscribe({
     next: val => console.log('next', val),
     complete: () => console.log('complete')

 })