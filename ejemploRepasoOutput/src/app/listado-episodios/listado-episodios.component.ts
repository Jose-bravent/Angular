import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Episodio } from '../interfaces/episodio.interface';
import { EpisodiosService } from '../services/episodios.service';

@Component({
  selector: 'app-listado-episodios',
  templateUrl: './listado-episodios.component.html',
  styleUrls: ['./listado-episodios.component.css']
})
export class ListadoEpisodiosComponent implements OnInit {
  /* @Input() datos!: Episodio[]; */
  @Output() enviar: EventEmitter<Episodio>

  datos!: Episodio[];

  opciones: any = [
    {value: 0, name: 'aaaa'},
    {value: 1, name: 'bbbb'},
    {value: 2, name: 'cccc'},
  ]
  constructor(private episodiosService: EpisodiosService) {
    this.enviar = new EventEmitter();
  }

  ngOnInit(): void {     
    this.datos = this.episodiosService.getAll();
  }
  seleccionarEpisodio(episodio: Episodio) {    
    this.enviar.emit(episodio);
  }
}

//Para enviar el episodio al padre, hay que definir un Output. Esto es un evento
//1.- Define el Output
//2.- Se inicializa
//3.- Se usa
