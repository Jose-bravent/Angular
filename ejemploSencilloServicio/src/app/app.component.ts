import { Component } from '@angular/core';
import { EpisodiosService } from './services/episodios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemploSencilloServicio';
  datos!: any[];
  opciones: any = [
    {value: 0, name: 'aaaa'},
    {value: 1, name: 'bbbb'},
    {value: 2, name: 'cccc'},
  ]
  constructor(private episodiosService: EpisodiosService) {}

  ngOnInit(): void {     
    this.datos = this.episodiosService.todosLosEpisodios();
    //this.datos = this.episodiosService.episodiosPorDirector('Brian Kirk')
  }

  add() {
    //this.episodiosService.addEpisodio({title: 'aaaa', director: 'bbbbb'})
    this.datos = this.episodiosService.eliminarEpisodio('A Golden Crown')  
  }
}
