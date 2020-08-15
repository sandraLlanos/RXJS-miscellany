import { interval, timer } from 'rxjs'

const observer = {
    next: val => console.log('next: ', val),
    complete: () => console.log('Complete:')  
    
}

const interval$ = interval(1000);
// const timer$ = timer(0)
/**
 * timer(0), se ejecuta inmediatamente js termina los callbacks pendientes
 * Inicio
 * Fin
 * next:  0
 * Complete:
 * 
 */

//  const timer$ = timer(2000)
/**
 * timer(2000), se ejecuta y completa a los 2000
 */

// const timer$ = timer(2000, 1000 )
/**
 * En este caso el timer funciona de forma similar al interval,
 * inicia la secuencia de un segundo, depués de pasados dos segundos.
 * Inicio
 * Fin
 * next:  0
 * next:  1
 * next:  2
 * next:  3
 * next:  4
 * next:  5
 * next:  6
 * next:  7
 */
const today = new Date();
today.setSeconds( today.getSeconds() + 5 );
const timer$ = timer( today );

/**
 * timer(today), en este caso se puede programar en que momento se desea que se
 * emita el valor en base a el timer y se complete el observable. 
 * Inicio
 * Fin
 * next:  0
 * Complete:
 * 
 */

console.log('Inicio');

// interval$.subscribe( observer )
timer$.subscribe( observer )

console.log('Fin');
