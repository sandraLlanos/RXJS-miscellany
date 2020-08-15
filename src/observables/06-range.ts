import {of, range, asyncScheduler} from 'rxjs'

// const obsOf$ = of(1,2,3,4,5);
const obsRange$ = range(-5,5, asyncScheduler);

/**
 * Range:Observable que emite una secuencia de números dentro de un rango específico.
 * argumentos Range:
 * range(start: number = 0, count?: number, scheduler?: SchedulerLike): Observable<number>
 * count: nos dice la cantidad de emisiones
 * Start por defecto es 0
 * scheduler: me permite tranformarlo de manera asyn
 **/

console.log('Inicio');
// obsOf$.subscribe(console.log);
obsRange$.subscribe(console.log);
console.log('Fin');

/**
 * Respuesta con AsyncScheduler
 * Inicio
 * Fin
 * -5
 * -4
 * -3
 * -2
 * -1
 * Respuesta sin AsyncScheduler
 * Inicio
 * -5
 * -4
 * -3
 * -2
 * -1
 * Fin
 */