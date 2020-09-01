import { fromEvent } from 'rxjs';
import { mapTo } from 'rxjs/operators';

/**
 * mapTo = emite un mismo valor por cada emision del observable
 */

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    mapTo('Tecla presionada')
)
keyup$.subscribe(console.log);



