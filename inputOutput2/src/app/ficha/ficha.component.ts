import { outputAst } from '@angular/compiler';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Persona } from '../interfaces/persona.interface';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.css']
})
export class FichaComponent implements OnInit {
  @Input() datos!: Persona;
  @Output() enviar: EventEmitter<Persona>

  constructor() {
    this.enviar = new EventEmitter();
  }

  ngOnInit(): void {
  }

  select() {    
    this.enviar.emit(this.datos);
  }
  
}

//Definir el evento al inicio de la clase con El nombre lo ponemos nosotros "output" --->  @Output() enviar: EventEmitter<Persona>
//Inicializar el evento en el constructor: this.enviar = new EventEmitter();
//Emitir el evento cuando lo necesitemos: this.enviar.emit(this.datos);

//En el padre
//Añadir el evento a la etiqueta (enviar)="datosEnviados($event)" --> <app-ficha *ngFor="let dato of datos;" [datos]="dato" (enviar)="datosEnviados($event)"></app-ficha>
//Definir la funcion que va a manejar el evento: datosEnviados($event)