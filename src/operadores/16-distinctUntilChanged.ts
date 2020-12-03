/** DistinctUntilChanged
 * Emite valores siempre y cuando la emision anterior no sea la misma 
 * este usa el operador de igualdad (tipo y valor)
 */

import { of, from } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

 const numeros$ = of<number|string>(1,'1',1,3,3,2,2,4,4,5,3,1,'1');

 numeros$.pipe(
    distinctUntilChanged()
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
         nombre: 'Megaman'
     },
     {
         nombre: 'X'
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
    distinctUntilChanged( (ant, act) => ant.nombre === act.nombre )
 )
 .subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete'),
 })