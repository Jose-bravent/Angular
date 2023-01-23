import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class ImcComponent implements OnInit {

  imc = 0;
  altura = 0;
  peso = 0;

  resultados = [
    {
      inicio: 0,
      fin: 19,
      mensaje: 'Peso inferior al normal'
    },
    {
      inicio: 19,
      fin: 25,
      mensaje: 'Peso normal'
    },
    {
      inicio: 25,
      fin: 30,
      mensaje: 'Peso superior al normal'
    },
    {
      inicio: 30,
      fin: 100,
      mensaje: 'Obesidad'
    }
  ]
  resultado: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

  obtenerPeso($event: any) {
    this.peso = Number($event.target.value);
  }

  obtenerAltura($event: any) {
    this.altura = Number($event.target.value);
  }

  calcularImc() {    
    this.imc = this.calcImc(this.altura, this.peso);
    this.resultado = this.calcularResultado(this.imc);
  }

  private calcImc(altura: number, peso: number) {
    return peso / (altura * altura);
  }

  private calcularResultado(imc: Number): string {
    const result = this.resultados.find(result => imc > result.inicio && imc <= result.fin);    
    return result ? result.mensaje : 'No se ha podido encontrar un resultado';    
  }
 
}

//Pedir el nombre, los apellidos, y la ciudad en la que vive (es un selector con 5 ciudades)
//Hola nombre + apellidos vives en ciudad
