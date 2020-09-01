import {of, from} from 'rxjs'

/**
 * of = toma argumentos y genera una secuencia de valores
 * from = crea un observable en base a un array, object, promise, iterable, observable
 */

 const observable = {
     next: val => console.log('next:', val),
     complete: () => console.log('complete') 
 };

 const sourceof$ = of([1,2,3,4,5]);
 const sourcefrom$ = from([1,2,3,4,5]);
 /**
  * para que tengan el mismo comportamiento se podria usar el spred operator en el of
  */

 const sourcefromString$ = from('Sandra');


// sourceof$.subscribe(observable);
// sourcefrom$.subscribe(observable);
// sourcefromString$.subscribe(observable);


fetch('https://api.github.com/users/klerith')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });

/**
 * El método fetch()
 * toma un argumento obligatorio, la ruta de acceso al recurso que desea recuperar.
 * Devuelve una Promise que resuelve en Response a esa petición, sea o no correcta. 
 * 
 */

 const sourcePromise$ = from<Promise<Response>>( fetch('https://api.github.com/users/klerith'));
// sourcePromise$.subscribe(observable);
// sourcePromise$.subscribe( response => {
    /**Es este caso la respuesta es un ReadableStream que tambien es una promesa */    
//     console.log(response.body);
//     response.json()
//      .then(function(myJson){               
//       console.log('sin Async', myJson);
//      });      
// });

sourcePromise$.subscribe( async(response) =>{
    console.log(response);
    const dataResponse = await response.json();
    console.log('con Async',dataResponse);    
    
})


const miGerenador = function*(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    yield 6;
    yield 7;
}
const miIterable = miGerenador();

// for (let i of miIterable) {
//     console.log(i);    
// }

from(miIterable).subscribe(observable);