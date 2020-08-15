import { fromEvent, Observer } from 'rxjs'; //importamos la función of

const obs1$ = fromEvent<MouseEvent>(document, 'click');
const obs2$ = fromEvent<KeyboardEvent>(document, 'keyup');


const observer:Observer<any> = {
    next: event => console.log('Event: ', event),
    error : error => console.error('error:', error),
    complete : () => console.info('completado:') 
}

// obs1$.subscribe( event => {
//     console.log(event.x);
//     console.log(event.y)
// });
obs1$.subscribe( ({x, y}) => {
    console.log(x, y);    
} );
obs2$.subscribe( event => console.log(event.key));
