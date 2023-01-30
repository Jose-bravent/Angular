import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import {ProductosServiceService} from '../services/productos-service.service';

@Component({
  selector: 'app-formulario-producto',
  templateUrl: './formulario-producto.component.html',
  styleUrls: ['./formulario-producto.component.css']
})
export class FormularioProductoComponent implements OnInit {
  form!: FormGroup;
  showAlert: boolean = false;
  mensajeAlert: string = '';

  constructor(private productoService: ProductosServiceService) { }

  ngOnInit(): void {
    this.form = new FormGroup ({
      nombre: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      descripcion: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      preMin: new FormControl('', [Validators.required, Validators.min(0)]),
      preMax: new FormControl('', [Validators.required, Validators.min(0)]),
      referencia: new FormControl('', [Validators.required, Validators.pattern(/[A-Za-z]{3}[0-9]{5}/)]) 
    }, [this.validarPrecio])
  }

  onSubmit() {   
    const producto = this.form.value;
    const productoEnviado ={...producto, referencia: producto.referencia.toUpperCase()}    
    this.mensajeAlert = this.productoService.addProducto(productoEnviado);
    this.showAlert = true;
    setTimeout(() => {
      this.showAlert = false;
      this.form.reset();
    }, 2000)
       
  }

  checkError(campo:string, error: string) {  
    if(this.form.get(campo)?.hasError(error) && this.form.get(campo)?.touched) {    
      return true  
    } else 
    {    
      return false  
    }  
  }

  validarPrecio(formulario: AbstractControl): any {
    const precioMin = formulario.get('preMin')?.value;
    const precioMax = formulario.get('preMax')?.value;
    if (precioMin <= precioMax) {
      return null;
    } 
    return {
      'validarprecio': true
    }
  }  
}

/*
CAMPOS DEL FORMULARIO
NOMBRE DEL PRODUCTO: STRING REQUERIDO DE 15 CARACTERES MÁXIMO
DESCRIPCION: STRING REQUERIDO DE 20 CARACTERES MÁXIMO
PRECIO MINIMO: NUMERICO REQUERIDO
PRECIO MAXIMO: NUMERICO REQUERIDO
REFERENCIA: SON 8 CARACTERES Y LOS 3 PRIMEROS SON LETRAS Y EL RESTO NUMEROS

EL PRECIO MÍNIMO NO PUEDE SER MAYOR QUE EL PRECIO MÁXIMO
*/