import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  tareas: any[] = [
    {
      nombre: 'Tarea 1',
      descripcion: 'Descripcion tarea 1',
      prioridad: 'Baja',
      tiempo: 2
    },
    {
      nombre: 'Tarea 2',
      descripcion: 'Descripcion tarea 2',
      prioridad: 'Baja',
      tiempo: 3
    },
    {
      nombre: 'Tarea 3',
      descripcion: 'Descripcion tarea 3',
      prioridad: 'Alta',
      tiempo: 1
    },
    {
      nombre: 'Tarea 4',
      descripcion: 'Descripcion tarea 4',
      prioridad: 'Media',
      tiempo: 5
    },
    {
      nombre: 'Tarea 5',
      descripcion: 'Descripcion tarea 5',
      prioridad: 'Alta',
      tiempo: 6
    },
    {
      nombre: 'Tarea 6',
      descripcion: 'Descripcion tarea 6',
      prioridad: 'Baja',
      tiempo: 1
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
