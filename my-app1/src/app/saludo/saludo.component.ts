import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {
  clase = 'parrafo';
  
  nombre: string = '';
  email: string = 'maria@gmail.com';
  tipo: string = 'password'
  claseCuadrado='';
  mensajeEdad='';
  
  ngOnInit(): void {
  } 

  cambiarTexto() {
    this.clase = 'small';
  }

  cambiarNombre($event: any) {
    this.nombre = $event.target.value;
  }

  verContra() {
    this.tipo === 'password' ? this.tipo = 'text' : this.tipo = 'password'
  }

  cambiarColor($event: any) {    
    this.claseCuadrado = $event.target.value;
  }

  comprobarEdad($event: any) {
    const ed = Number($event.target.value);
    ed >= 18 ? this.mensajeEdad = 'Eres mayor de edad' : this.mensajeEdad = 'Eres menor de edad';
  }
}

//peso / altura * altura
