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
      fechaNacimiento: new FormControl(''), 
      email: new FormControl('', Validators.required),
      dni: new FormControl('', Validators.pattern(/^[0-9]{8,8}[A-Za-z]$/)),      
      condiciones: new FormControl('', Validators.requiredTrue),    

     }, [])   
  }
  onSubmit() {
    console.log(this.form.value)
  }
}
//Nombre - Requerido y tenga entre 3 y 15 caracteres
//Apellidos - No es requerido
//Email  Requerido
//Fecha de nacimiento - Type date --> 2023-01-26 - combrobar si es mayor de edad
//Dni - Validar el dni. ! version con una Regex
//Aceptar condiciones - Requerido

