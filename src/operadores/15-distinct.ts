/** Distinct
 * Este permite el paso de valores que no han sido previamente
 * emitidos por el observable
 * ejemplo: interval envia 1 1 2 3 3 
 * la salida a este seria 1 2 3
 * ya que el 1 y el 3 fuero previamente emitidos
 */

import { of, from } from "rxjs";
import { tap, distinct } from "rxjs/operators";

 const numeros$ = of<number|string>(1,'1',1,3,3,2,2,4,4,5,3,1,'1');

 numeros$.pipe(
    // tap(console.log),
    distinct()
 ).subscribe({
     next: val => console.log('next', val),
     complete: () => console.log('complete'),
 });

 interface Personaje{
     nombre: string;
 }

 const personajes: Personaje[] = [
     {
         nombre: 'Megaman'
     },
     {
         nombre: 'X'
     },
     {
         nombre: 'Zero'
     },
     {
         nombre: 'Dr. willy'
     },
     {
         nombre: 'Megaman'
     },
     {
         nombre: 'Zero'
     },
 ];

 from(personajes).pipe(
     distinct( p => p.nombre )
 )
 .subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete'),
 })