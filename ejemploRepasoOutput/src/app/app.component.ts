import { Component } from '@angular/core';
import { Episodio } from './interfaces/episodio.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /* episodios: Episodio[] = [
    { title: 'Winter Is Coming', director: 'Tim Van Patten' },
    { title: 'The Kingsroad', director: 'Tim Van Patten' },
    { title: 'Lord Snow', director: 'Brian Kirk' },
    { title: 'Cripples, Bastards, and Broken Things', director:
    'Brian Kirk' },
    { title: 'The Wolf and the Lion', director: 'Brian Kirk' },
    { title: 'A Golden Crown', director: 'Daniel Minahan' },
    { title: 'You Win or You Die', director: 'Daniel Minahan' },
    { title: 'The Pointy End', director: 'Daniel Minahan' }
    ] */
    mensaje: string = '';

    recibir($event: Episodio) {
      console.log('Estoy en el padre')
      console.log($event);
      this.mensaje = 'Has seleccionado el episodio: ' + $event.title;
    }
}
