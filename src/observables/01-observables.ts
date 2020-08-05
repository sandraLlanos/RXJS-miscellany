import { Observable, Observer } from 'rxjs';  // cuando el objeto se extrae directamente del rxjs
                                    //significa que es para crear Observable 

const observer:Observer<any> = {
    next : valor => console.log('next[obs]: ', valor),
    error : error => console.error('error[obs]:', error),
    complete : () => console.info('completado[obs]:') 
}

// obs$.subscribe( 
//     valor => console.log('next: ', valor),
//     error => console.error('error', error),
//     () => console.info('completado')     
//  )  

// const obs$ = Observable.create()  método estático para crear Observable

const obs$ = new Observable<string>( subscriber => {
    subscriber.next('hola'); //emite el valor deseado a los objetos subscritos.
    subscriber.next('mundo');
    
    subscriber.next('hola');
    subscriber.next('mundo');
    

// para forzar el error
    // const a = undefined;
    // a.nombre = 'sandra';

    subscriber.complete(); //después de llamar al complete ninguna emision va a ser notificada al subscriptor

    subscriber.next('hola');
    subscriber.next('mundo');
})

obs$.subscribe( observer );

//es igual que solo llammar el console.log
// obs$.subscribe( respuesta => 
//     {console.log(respuesta);
// }) 
// respuesta en este caso lo que hace es procesar el next del subscriber

// obs$.subscribe( console.log )

// Existen 3 posibles argumentos (funciones) que se le pueden enviar a un subscribe
// next
// error
// complete
// obs$.subscribe( 
//     valor => console.log('next: ', valor),
//     error => console.error('error', error),
//     () => console.info('completado')     
//  )  


