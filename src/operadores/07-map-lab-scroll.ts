import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien quam, suscipit in tincidunt in, sodales et tellus. Nullam pellentesque lectus est, eget posuere ex euismod nec. Aliquam vel euismod diam, et dictum ante. In lacinia lacus enim, eu faucibus lectus vehicula vel. Donec dictum vulputate dui, vel mattis eros dapibus id. Phasellus ultricies gravida mi, in maximus nibh rhoncus ut. Cras vel leo at neque consequat rutrum. Praesent eu purus maximus orci aliquam efficitur ac ut nisi. Duis elementum varius leo sed ultricies. Fusce vitae mattis sem, nec scelerisque ligula. Quisque ipsum dolor, fringilla ut est sit amet, faucibus egestas erat. Suspendisse potenti. Vestibulum sit amet suscipit diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
<br/><br/>
Sed faucibus tempor nisi, eget congue purus blandit eu. Donec mattis ullamcorper lorem sed pulvinar. Cras ac mollis odio. Ut eget feugiat nisi. Donec finibus ornare commodo. Quisque augue urna, vestibulum vitae pellentesque vel, luctus sed sem. Curabitur tristique elit id lacus malesuada, eu fringilla orci molestie. Etiam id dignissim augue. Aliquam eu lorem eget sapien varius facilisis tempor a massa. Integer sit amet felis laoreet, laoreet massa in, scelerisque felis.
<br/><br/>
Quisque gravida non enim nec sollicitudin. Suspendisse vulputate, felis interdum lacinia tempus, turpis enim interdum ante, in sagittis velit est sit amet tellus. Donec lacinia rhoncus lectus a euismod. Mauris ac porttitor purus. Maecenas aliquam neque in tincidunt pretium. Aliquam ante sem, viverra vitae volutpat facilisis, porttitor et dolor. Vestibulum sollicitudin egestas lorem, sed tristique magna venenatis ac. Suspendisse posuere vehicula dolor quis mollis. Donec porttitor ipsum pretium, porta ex vitae, aliquam eros. Donec sit amet nunc neque. Phasellus semper ante id eros placerat faucibus. Suspendisse imperdiet ligula lectus, at viverra est sollicitudin ut. Proin sed pharetra lacus. Nullam maximus euismod vulputate.
<br/><br/>
Aenean euismod efficitur cursus. Aliquam vitae vestibulum orci. Vivamus nec aliquet est, id vehicula ante. Donec sed auctor nibh. Nulla eget elit lectus. Nunc fringilla lacus id volutpat hendrerit. Donec vitae porttitor turpis, eget consectetur ipsum. Nulla varius mauris est, in varius nisl imperdiet a. Phasellus lacinia odio turpis, ac dictum mi volutpat id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit nunc quis orci feugiat porttitor. Aliquam erat volutpat.
<br/><br/>
In in justo velit. Donec vel semper ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur turpis leo, dictum a tellus sed, vestibulum elementum nibh. Suspendisse scelerisque est tortor, nec lacinia nunc placerat ut. Morbi convallis elit urna, ut sollicitudin metus blandit vel. Fusce sed ex vitae mi hendrerit faucibus.
`;

const body = document.querySelector('body');
body.append( texto );

const progressBar = document.createElement('div');
progressBar.setAttribute('class','progress-bar');
body.append(progressBar);

/** función que realiza el calculo */

// Streams
const scroll$ = fromEvent(document,'scroll');
// scroll$.subscribe(console.log);

/** Calular progreso del Progreess bar
 * para medir el progreso debemos conocer:
 * ClientHeight: es el alto que se puede ver en la pantalla sin hacer scroll 
 * ScrollHeight: es el alto de todo el contenido que se tiene haciendo scroll
 * ScrollTop: es todo el contenido al que se le ha aplicado scroll
 * -----------que tanto scroll ha realizado con respecto al top
 * 
 * ejemplo:
 * ClientHeight 350px
 * ScrollHeight:800px
 * ScrollTop: 300px
 * 
 * 800-350 = 450
 * 
 * 300/450 = 0,6666666666666667 * 
 * 
 * 0,6666666666666667 * 100% = 66,66666666666667%
 * 
 * Es decir que estoy por el 66% de la pantalla
 */
const calcularPorcentajeScroll = (event) => {
    console.log(event);
    const { scrollTop,
            scrollHeight,
            clientHeight
          } = event.target.documentElement;
    console.log(scrollTop,scrollHeight,clientHeight);

    return (scrollTop / (scrollHeight-clientHeight)) * 100;
    
}
const progress$ = scroll$.pipe(
    map(event => calcularPorcentajeScroll(event)),
    tap(console.log)
);

progress$.subscribe( porcentaje => {
    progressBar.style.width = `${ porcentaje }%`;
})


const child =  document.createElement('p');
child.innerHTML = 'este es el hijo';
const parent = document.querySelector('div');
parent.append(child);

