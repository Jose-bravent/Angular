import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {
  @Output() enviarPrecios: EventEmitter<any>
  @Output() enviarReset: EventEmitter<any>

  form!: FormGroup;

  constructor() { 
    this.enviarPrecios = new EventEmitter();
    this.enviarReset = new EventEmitter();
  }

  ngOnInit(): void {
    this.form = new FormGroup ({      
      preMin: new FormControl('', [Validators.required, Validators.min(0)]),
      preMax: new FormControl('', [Validators.required, Validators.min(0)]),      
    }, [])
  }

  onSubmit() {    
    this.enviarPrecios.emit(this.form.value);    
  }

  reset() {
    this.form.reset();
    this.enviarReset.emit();
  }

}
