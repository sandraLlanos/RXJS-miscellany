import { fromEvent } from "rxjs";
import { debounceTime } from "rxjs/operators";


const body = document.querySelector('body');
const textInput = document.createElement('input');
body.append(textInput);

const input$ = fromEvent(textInput, 'keyup');

input$.pipe(
debounceTime(500),

)
.subscribe( resp => console.log('respuesta del subscribe', resp));

