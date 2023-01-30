import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  @Output() enviarNombre: EventEmitter<string>

  constructor() {
    this.enviarNombre = new EventEmitter()
   }

  ngOnInit(): void {
  }

  filtrarNombre($event: any) {  
    console.log($event.target.value)  
    this.enviarNombre.emit($event.target.value);
  } 
}
