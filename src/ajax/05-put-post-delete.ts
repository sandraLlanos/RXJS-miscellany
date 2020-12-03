/** Métodos Get, Put y Delete */

import { ajax } from 'rxjs/ajax';

const url = 'http://httpbin.org/delay/1';

ajax.get(url)

ajax.post(url, {
   id:1,
   nombre:'sandra'
},{
   'mi-token':'ABC123'
}).subscribe(console.log);

ajax.put(url, {
   id:1,
   nombre:'sandra'
},{
   'mi-token':'ABC456'
}).subscribe(console.log);

ajax.delete(url, {
   'mi-token':'ABC456'
}).subscribe(console.log);