import { Component, Input, OnInit } from '@angular/core';
import { Tarea } from '../interfaces/tarea.interface';
import { TareasService } from '../services/tareas.service';

@Component({
  selector: 'app-listado-tareas',
  templateUrl: './listado-tareas.component.html',
  styleUrls: ['./listado-tareas.component.css']
})
export class ListadoTareasComponent implements OnInit {
@Input() tareas: Tarea[]=[];  
  suma:number =  0;
  tareasVistas: Tarea[] = [];
  otras: Tarea[] = []

  constructor(private tareasService: TareasService) {
    console.log('constructor')
    console.log(this.tareas)
  }

  ngOnInit(): void { 
    this.tareasVistas = this.tareas;
    this.otras = this.tareasService.getAll();
    console.log(this.otras)
  }

  ngDoCheck() {
    console.log('ngDocheck')
    this.suma = 0;
    this.tareasVistas.forEach(tarea =>
      this.suma += tarea.tiempo)
  }

  filtrarPorPrioridad($event: any) {
    const prioridad: string = $event.target.value;
    if (prioridad !== '') {
      this.tareasVistas = this.tareas.filter(tarea => tarea.prioridad === prioridad);
    } else {
      this.tareasVistas = this.tareas;
    }
    
  }

}
