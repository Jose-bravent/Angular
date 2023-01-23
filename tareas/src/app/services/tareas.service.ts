import { Injectable } from '@angular/core';
import { Tarea } from '../interfaces/tarea.interface';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  tareas: Tarea[] = []
  constructor() { }

  getAll() {

    return [
      {nombre: 'T11', prioridad: 'Baja', tiempo: 2},
      {nombre: 'T12', prioridad: 'Media', tiempo: 2},
      {nombre: 'T13', prioridad: 'Baja', tiempo: 2},
      {nombre: 'T14', prioridad: 'Alta', tiempo: 2},
      {nombre: 'T15', prioridad: 'Baja', tiempo: 2}
     ]
  }
}
