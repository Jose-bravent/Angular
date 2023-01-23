import { Component } from '@angular/core';
import { Tarea } from './interfaces/tarea.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 tareas: Tarea[] = [
  {nombre: 'T1', prioridad: 'Baja', tiempo: 2},
  {nombre: 'T2', prioridad: 'Media', tiempo: 2},
  {nombre: 'T3', prioridad: 'Baja', tiempo: 2},
  {nombre: 'T4', prioridad: 'Alta', tiempo: 2},
  {nombre: 'T5', prioridad: 'Baja', tiempo: 2}
 ];

  guardarTarea($event: Tarea) {    
    this.tareas.push({...$event});    
  }

  
}
