
/** GetJson
 * sirve para ejecutar una peticion HTTP y obtener informacion
 * 
 */
import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

 //en el segundo parametro pueso enviar los headers
const obs$ =  ajax.getJSON(url, {
   'Content-type': 'application/json',
   'mi-token':'ABC123'
});

obs$.subscribe(data => console.log('data',data));





