import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../interfaces/persona.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  @Input() personas!: Persona[]

  constructor() { }

  ngOnInit(): void {
  }

}
