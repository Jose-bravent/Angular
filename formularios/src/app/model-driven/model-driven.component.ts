import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.css']
})
export class ModelDrivenComponent implements OnInit {
  form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
      apellidos: new FormControl(''),
      fecha: new FormControl(''),
      edad: new FormControl('', [Validators.required, this.edadValidador]),
      email: new FormControl(''),
      password: new FormControl(''),
      repeatPass: new FormControl(''),
      condiciones: new FormControl('', Validators.requiredTrue),      
      }, [this.passwordCompare])

    this.form.patchValue({
      nombre: 'Juan',
      apellidos: 'dddd',
      edad: 30,
      email: 'ddd',
      password: 'dddd',
      repeatPass: 'dddd',
      condiciones: true
    })
  }
  onSubmit() {
    console.log(this.form.value)
    const datos = this.form.value;
    const fecha = new Date(datos.fecha)
    console.log(fecha)
    console.log(fecha.getFullYear())
    console.log(fecha.getMonth())
    console.log(fecha.getDate())
  }

  edadValidador(control: AbstractControl): any {
    const edad: number = parseInt(control.value);    
    if (!isNaN(edad)) {
      if (edad < 18 || edad > 65) {
        return {edadvalidador: 'La edad no está entre 18 y 65'};
      }
    } else {
      return {edadvalidador: 'Debes introducir un número'}
    }
    
    return null
  }

  passwordCompare (formulario: AbstractControl): any {
    const password: string = formulario.get('password')?.value;
    const repeatPass: string = formulario.get('repeatPass')?.value

    if (password !== repeatPass) {
      return {
        'passwordcompare': true
      }
    }
    return null
  }

  
}
