import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-ejercicio-formulario',
  templateUrl: './ejercicio-formulario.component.html',
  styleUrls: ['./ejercicio-formulario.component.css']
})
export class EjercicioFormularioComponent implements OnInit {
  form!: FormGroup
  constructor() { }

  ngOnInit(): void {

    this.form = new FormGroup({

      nombre: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      apellidos: new FormControl(''), 
      fechaNacimiento: new FormControl('', this.validarMayorEdad), 
      email: new FormControl('', Validators.required),
      dni: new FormControl('', [Validators.required, this.validarDni]),      
      condiciones: new FormControl('', Validators.requiredTrue),    

     }, []) 
     
     this.form.patchValue({
      nombre: 'Juan',
      apellidos: 'dddd',
      fechaNacimiento: '2000-01-01',
      email: 'ddd@ddd.es',
      dni: '11111111A',      
      condiciones: true
    })
  }

  onSubmit() {
    console.log(this.form.value)
  }

  /* validarMayorEdad(control: AbstractControl): any {
    const edad = control.value;
    const edadFormatoFecha = new Date(edad);
    const fechaActual = new Date();
      const TIEMPO_MAYOR_EDAD = 567648000000; 
    const tiempo = fechaActual.getTime() - edadFormatoFecha.getTime();
    if (tiempo >= TIEMPO_MAYOR_EDAD) {
      return null;
    }
    return {
      'validarmayoredad' : 'No eres mayor de edad'
    }
  } */

  validarMayorEdad(control: AbstractControl): any {
    const edad = control.value;
    const edadFormatoFecha = new Date(edad);
    const hoy = new Date();
    const edadDia = edadFormatoFecha.getDate();
    const edadMes = edadFormatoFecha.getMonth();
    const edadYear = edadFormatoFecha.getFullYear();

    const hoyDia = hoy.getDate();
    const hoyMes = hoy.getMonth();
    const hoyear = hoy.getFullYear();

    const years = hoyear - edadYear;
    
    if ((years > 18) ||
        (years === 18 && edadMes < hoyMes) ||
        (years === 18 && edadMes === hoyMes && edadDia <= hoyDia)) {
          return null;
    } else {
        return {
          'validarmayoredad' : 'No eres mayor de edad'
        }    
    }    
  }

  validarDni(control: AbstractControl): any {
    const dni = control.value;
    const letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T'];
    const longitud = dni.length;
    const letra = dni[longitud - 1];
    const numero = Number(dni.substring(0, longitud - 1));
    const resto = numero ? numero % 23 : 0;
    if (numero && letra.toUpperCase() === letras[resto]) {
      return null
    } else {
      return {
        'validardni' : 'El dni no es válido'
      } 
    }
  }
}
//Nombre - Requerido y tenga entre 3 y 15 caracteres
//Apellidos - No es requerido
//Email  Requerido
//Fecha de nacimiento - Type date --> 2023-01-26 - combrobar si es mayor de edad
//Dni - Validar el dni. ! version con una Regex
//Aceptar condiciones - Requerido

/*
dia, mes y año de la fecha de nacimiento en 3 variables
const edadFormatoFecha = new Date(edad);
const dia = edadFormatoFecha.getDate()
const mes = edadFormatoFecha.getMounth()
const ano = edadFormatoFecha.getFullYear
dia, mes y año actual en tres variables
años trascurridos > 18
 mayor de edad
  sino si === 18 {
    si mesActual > mes de la fecha {
      mayor de edad
    } else if diaActual >= dia de la fecha{
      mayor de edad
    } else {
      menor de edad
    }
  } sino {
    menor de edad
  }



*/
