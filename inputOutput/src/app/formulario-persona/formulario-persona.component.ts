import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Persona } from '../interfaces/persona.interface';

@Component({
  selector: 'app-formulario-persona',
  templateUrl: './formulario-persona.component.html',
  styleUrls: ['./formulario-persona.component.css']
})
export class FormularioPersonaComponent implements OnInit {
  @Output() enviarPersona: EventEmitter<Persona>

  persona: Persona = {
    nombre: '',
    telefono: '',
    email: ''
  };

  constructor() {
    this.enviarPersona = new EventEmitter();
  }

  ngOnInit(): void {
  }

  enviar() {    
    this.enviarPersona.emit(this.persona);
    this.persona = {nombre: '', telefono: '', email: ''}
  }
}
