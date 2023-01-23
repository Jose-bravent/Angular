import { Component } from '@angular/core';
import { Persona } from './interfaces/persona.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  mensaje:string = '';
  datos: Persona[] = [
    {
      nombre: 'Juan',
      telefono: '111111111',
      email: 'juan@juan.es'
    },
    {
      nombre: 'Maria',
      telefono: '222222222',
      email: 'maria@maria.es'
    },
    {
      nombre: 'Luis',
      telefono: '333333333',
      email: 'luis@luis.es'
    },
    {
      nombre: 'Ana',
      telefono: '444444444',
      email: 'ana@ana.es'
    }
  ]
  datosEnviados($event: Persona) {    
    this.mensaje = 'Has seleccionado a: ' + $event.nombre;
  }
}

//En el padre
//Añadir el evento a la etiqueta (enviar)="datosEnviados($event)" --> <app-ficha *ngFor="let dato of datos;" [datos]="dato" (enviar)="datosEnviados($event)"></app-ficha>
//Definir la funcion que va a manejar el evento: datosEnviados($event)