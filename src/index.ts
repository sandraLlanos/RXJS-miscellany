import { Observable, Observer } from 'rxjs';  // cuando el objeto se extrae directamente del rxjs
                                    //significa que es para crear Observable 

const observer:Observer<any> = {
    next : valor => console.log('next: ', valor),
    error : error => console.error('error:', error),
    complete : () => console.info('completado:') 
}

const interval$ = new Observable<number>( subsriber => {
    let count = 0;
    const interval = setInterval( ()=> {
        count ++;
        subsriber.next(count);
        console.log(count);        
    }, 1000);
    return () => {
        clearInterval(interval);
        console.log('intervalo destruido');        
    }
});

const subcription2 = interval$.subscribe( )
const subcription1 = interval$.subscribe( )
const subcription3 = interval$.subscribe( )

setTimeout(()=>{
    subcription1.unsubscribe(); //cancela la subscripción, pero no destruye el intervalo
    subcription2.unsubscribe();
    subcription3.unsubscribe();
    console.log('completado');
    
}, 3000)

