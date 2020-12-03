
/** fetch
 * está basado en promesas
 * no se pueden cancelar las peticiones
 */
const url = 'https://api.github.com/users?per_page=5';

const fetchPromesa = fetch( url );
const manejaErrores = (response:Response) => {
   if (!response.ok){
      throw new Error(response.statusText);
   }
   return response;
}

fetchPromesa
   .then( resp => resp.json() )
   .then( data => console.log('data', data) )
   .catch( err => console.warn('Error en usuarios')
   )

//se puede dar el manejo de errores llamando otra funcion en una promesa
// fetchPromesa
//    .then(manejaErrores)
//    .then( resp => resp.json() )
//    .then( data => console.log('data', data) )
//    .catch( err => console.warn('Error en los usuarios')
//    )


