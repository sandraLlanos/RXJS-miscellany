import { range, from } from 'rxjs';
import { filter } from 'rxjs/operators';

/**
 * Filter = elementos emitidos por la fuente Observable
 * emitiendo solo aquellos que satisfacen un predicado(condición) específico.
 * predicado: debe de ser una condición que regrese verdadero o falso
 */

range(1,10).pipe(
    filter( val => val % 2 === 1 )
).subscribe(console.log);

range(20,30).pipe(
    filter( (val, i) => {
        console.log('index', i);        
        return val % 2 === 1;
    })
).subscribe(console.log);

interface Personaje {
    tipo: string;
    nombre: string;
}
const personajes:Personaje[] = [
    {
        tipo:'heroe',
        nombre:'Batmam'
    },
    {
        tipo:'heroe',
        nombre:'Robin'
    },
    {
        tipo:'villano',
        nombre:'Jocker'
    }
]

from( personajes ).pipe(
    filter( personaje => personaje.tipo === 'heroe')
).subscribe(console.log);




