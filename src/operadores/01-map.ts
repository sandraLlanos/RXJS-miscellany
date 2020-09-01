import { range, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * map = a cada valor emitido por la fuente Observable,
 * y emite los valores resultantes como un Observable
 */

range(1,5).subscribe(console.log);
range(1,5).subscribe(val =>{console.log(val * 10)});


range(1,5).pipe(
    map<number, number>( val =>{
        return val * 10
    })
)
.subscribe(console.log);
range(1,5).pipe(
    map<number, string>( val =>{
        return (val * 10).toString();
    })
)
.subscribe(console.log);

const keyup$ = fromEvent(document, 'keyup');
keyup$.subscribe(console.log);

const keyupWithOperator$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map( event => event.code )
)
keyupWithOperator$.subscribe(console.log);

