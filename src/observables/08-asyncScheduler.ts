import { asyncScheduler } from 'rxjs';

/** como parámetros de debe de enviar:
 * la definición de la función (sin parentesis) 
 * en cuanto tiempo quiero ejecutarla.
 * estado de lo que va a ser el schedule
 */

/** Estas dos instrucciones son las que vamos a poder ejecutar con el asyncScheduler */

// setTimeout( ()=> {}, 3000 );
const saludar = () => console.log('Hola mundo');
const saludarConArgumentos = nombre => console.log(`hola ${ nombre }`);
asyncScheduler.schedule(saludar, 2000);
asyncScheduler.schedule(saludarConArgumentos, 2000, 'Sandra');

// setInterval( ()=> {}, 3000 );

const subs =  asyncScheduler.schedule( function(state){
    console.log('este es el state', state);
    this.schedule( state + 1, 1000 );
}, 3000, 0 );

// setTimeout( ()=> {
//     subs.unsubscribe();
// }, 6000);

asyncScheduler.schedule( ()=> subs.unsubscribe(), 6000 );

/**
 * Para el caso de representar el serInterval se requiere:
 * Una función que para este caso no puede ser lambda,
   esta función va a recibir el state
 * El intervalo de tiempo en el que quiero que la función comience a ejecutar 
 * El state, este puede ser un número, un objeto... pero sólo puede ser 1 argumento
 * Para lograr convertir el schedule en un interval se debe de llamar
   nuevamente cambiando el valor del estado
 */
