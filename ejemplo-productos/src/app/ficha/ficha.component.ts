import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.css']
})
export class FichaComponent implements OnInit {
  @Input() productoFicha!: Producto;

  constructor() { }

  ngOnInit(): void {
  }

}
