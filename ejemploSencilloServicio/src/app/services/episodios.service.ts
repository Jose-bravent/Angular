import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EpisodiosService {

  episodios: any[] = [    
      { title: 'Winter Is Coming', director: 'Tim Van Patten' },
      { title: 'The Kingsroad', director: 'Tim Van Patten' },
      { title: 'Lord Snow', director: 'Brian Kirk' },
      { title: 'Cripples, Bastards, and Broken Things', director:
      'Brian Kirk' },
      { title: 'The Wolf and the Lion', director: 'Brian Kirk' },
      { title: 'A Golden Crown', director: 'Daniel Minahan' },
      { title: 'You Win or You Die', director: 'Daniel Minahan' },
      { title: 'The Pointy End', director: 'Daniel Minahan' }      
  ] 
  epi!: any[];

  constructor() {
    this.epi = this.episodios;
   }

  todosLosEpisodios() {
    return this.episodios;
  }

  episodiosPorDirector(director: string) {
    return this.episodios.filter(epi => epi.director === director);
  }

  addEpisodio(episodio: any) {
    this.episodios.push(episodio)
  }

  eliminarEpisodio(nombre: string) {
    console.log(this.episodios.filter(epi => epi.title !== nombre))
    return this.episodios.filter(epi => epi.title !== nombre)
  }

}
