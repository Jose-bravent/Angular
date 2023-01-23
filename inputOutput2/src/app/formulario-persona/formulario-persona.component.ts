import { Component, OnInit } from '@angular/core';
import { Persona } from '../interfaces/persona.interface';

@Component({
  selector: 'app-formulario-persona',
  templateUrl: './formulario-persona.component.html',
  styleUrls: ['./formulario-persona.component.css']
})
export class FormularioPersonaComponent implements OnInit {
  persona: Persona = {
    nombre: '',
    telefono: '',
    email: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  enviar() {
    console.log('has pulsado el boton')
  }
}
