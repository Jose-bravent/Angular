import { outputAst } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Tarea } from '../interfaces/tarea.interface';

@Component({
  selector: 'app-formulario-tareas',
  templateUrl: './formulario-tareas.component.html',
  styleUrls: ['./formulario-tareas.component.css']
})
export class FormularioTareasComponent implements OnInit {
  @Output() enviar: EventEmitter<Tarea>

  tarea: Tarea = {
    nombre: '',
    prioridad: '',
    tiempo: 0
  }
  
  constructor() {
    this.enviar = new EventEmitter();
   }

  ngOnInit(): void {
  }

  guardar() {    
    this.enviar.emit(this.tarea);
    this.tarea = {nombre: '', prioridad: '', tiempo: 0}
  }
}
