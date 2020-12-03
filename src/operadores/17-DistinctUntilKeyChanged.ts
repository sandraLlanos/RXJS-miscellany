/** DistinctUntilKeyChanged
 *  cuando se tiene un objeto que es el que esta emitiendo los valores
 *  el DistinctUntilKeyChanged va a estar pendiente de la propiedad K
 *  que seria la que se enviaria como string dentro del objeto 
 */

import { from } from "rxjs";
import { distinctUntilKeyChanged } from "rxjs/operators";

 
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
     distinctUntilKeyChanged('nombre')
 )
 .subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete'),
 })