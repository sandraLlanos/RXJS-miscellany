import { Observable, Observer, Subject } from 'rxjs';  // cuando el objeto se extrae directamente del rxjs
                                              //significa que es para crear Observable 

const observer:Observer<any> = {
    next : valor => console.log('next: ', valor),
    error : error => console.error('error:', error),
    complete : () => console.info('completado:') 
}

const intervalo$ = new Observable<any>( subs => {
    const intervalId = setInterval(()=>{               
        subs.next(Math.random()) ;  
    }, 1000)
    return () => {
        clearInterval(intervalId)
        console.log('Intervalo destruido');    
    }
})

const subject$ = new Subject();
const intervalSubject = intervalo$.subscribe( subject$ );

/**
 * Subject
    * Es un tipo especial de observable.
    * Es un observer, se puede enviar como argumento al subscribe.
    * Puede manejear Next, Error y Complete.
    * Posee casteo multiple, es decir que me permite tener muchas subcripciones 
      sujetas al mismo subject y me sirve para distribuir la misma información a 
      todos los lugares donde estén subscritos.  
 
  
 En este caso se desea emitir siempre el mismo el valor independientemente de
 la subscripción que lo requiera
 **/

// const subscription = intervalo$.subscribe( rdn1 => {
//     console.log('subscription1', rdn1);    
// });
// const subscription2 = intervalo$.subscribe( rdn2 => {
//     console.log('subscription2', rdn2);    
// });
const subscription = subject$.subscribe( observer );
const subscription2 = subject$.subscribe( observer );

setTimeout(()=>{
    subject$.next(10);
    subject$.complete();
    intervalSubject.unsubscribe(); 
    /**
     * es importante llamar el unsubscribe de la subscripcion
     * para asegurar que se destruya el intervalo y no siga consumiendo memoria
     */
}, 3500)


/**
 * Cuando la data es producida por el observable en si mismo, es considerado un
 * Cold Observable, pero cuando la data es producida fuera de observable es llamado
 * Hot Observable.
 */

 /**
  * Un subject nos permite transformar un Cold observable en un Hot observable
  * ejempl linea 48
  */