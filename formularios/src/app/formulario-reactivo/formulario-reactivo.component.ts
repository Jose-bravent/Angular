import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent implements OnInit {
  form!: FormGroup;

  nom: string = '';
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({

      nombre: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
      apellidos: new FormControl('', Validators.required), 
      edad: new FormControl('', [this.edadValidator]), 
      email: new FormControl('', Validators.email),
      password: new FormControl(''),
      repeatPass: new FormControl(''),
      condiciones: new FormControl('', Validators.requiredTrue),    

     }, [this.passwordCompare])     

     let nombre = this.form.get('nombre');

     nombre?.valueChanges.subscribe(
      (value: string) => {
        console.log(`Cambia el nombre ${value}`)
        this.nom = value;
      }
    )

  }

  checkApellidos() {
    if (this.form.get('apellidos')?.hasError('required') && this.form.get('apellidos')?.touched) {     
      return true
    } else {
      return false
    }
  }  

  checkError(control: string, error: string) {
    if (this.form.get(control)?.hasError(error) && this.form.get(control)?.touched) {
      return true
    } else {
      return false
    }
  }

  verNombre() {
    if (this.form.get('nombre')?.touched && !this.form.get('nombre')?.hasError('required') && !this.form.get('nombre')?.hasError('minlength')) {
      return true
    } else {
      return false
    }
  }


  onSubmit() {
    console.log(this.form.value)    
    const datos = this.form.value;
  }

  //Devolvemos null si el validador es correcto
  edadValidator(control: AbstractControl): any {
   
    let edad = parseInt(control.value)
    
    if (!edad) {
      return { 'edadvalidador': 'Debes introducir un numero'}
    }
    let minEdad = 18
    let maxEdad = 65
    if(edad >= minEdad && edad <= maxEdad){
      return null
    } else{
      return { 'edadvalidador': 'La edad debe estar entre 18 y 65'}
    } 
    
  }

  passwordCompare (formulario: AbstractControl): any {
    const password: string = formulario.get('password')?.value;
    const repeatPass: string = formulario.get('repeatPass')?.value;
   
    if (password !== repeatPass) {
      return {
        'passwordcompare': true
      }
    }
    return null
  } 

}

//Nombre - Requerido y tenga entre 3 y 15 caracteres
//Apellidos - No es requerido
//Email  Requerido
//Fecha de nacimiento - Type date --> 2023-01-26 - combrobar si es mayor de edad
//Dni - Validar el dni. ! version con una Regex
//Aceptar condiciones - Requerido

