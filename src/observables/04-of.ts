import { of } from 'rxjs'; //importamos la función of

const obs$ = of<number>(1,2,3,4,5,6);
// const obs$ = of([1,2,3,4,5,6]);
// const obs$ = of(...[1,2,3,4,5,6],2,3,4,5);
// const obs$ = of<any>([1,2], {a:1, b:2}, true,function(){}, Promise.resolve(true));

console.log('Inicio de la obs$...');

obs$.subscribe(
    next => console.log('next', next),
    null,
    () => console.log('Se ha completado la secuencia')    
    )
    
console.log('Final de la obs$...');


/**
 * * La salida de este código nos muestra que la función puede ser sincrona.
 * Inicio de la obs$...
 * next 1
 * next 2
 * next 3
 * next 4
 * next 5
 * next 6
 * Se ha completado la secuencia
 * Final de la obs$...
 */