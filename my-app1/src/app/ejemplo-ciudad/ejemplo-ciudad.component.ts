import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo-ciudad',
  templateUrl: './ejemplo-ciudad.component.html',
  styleUrls: ['./ejemplo-ciudad.component.css']
})
export class EjemploCiudadComponent implements OnInit {

  nombre: string = '';
  apellidos: string = '';
  ciudad: string = '';
  mensaje: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  /* getNombre($event: any) {
    this.nombre = $event.target.value;
  }

  getApellidos($event: any) {
    this.apellidos = $event.target.value;
  }

  getCiudad($event: any) {
    this.ciudad = $event.target.value;    
  } */

  /* mostrar() {
    this.mensaje = this.nombre + ' ' + this.apellidos + ' vives en la ciudad: ' + this.ciudad
  } */

}
