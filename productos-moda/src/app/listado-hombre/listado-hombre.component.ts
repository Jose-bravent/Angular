import { Component, OnInit } from '@angular/core';
import { Articulo, ArticuloSimple } from '../interfaces/articulo';
import { ArticulosServiceService } from '../services/articulos-service.service';

@Component({
  selector: 'app-listado-hombre',
  templateUrl: './listado-hombre.component.html',
  styleUrls: ['./listado-hombre.component.css']
})
export class ListadoHombreComponent implements OnInit {
  articulosHombre!: ArticuloSimple[];

  constructor(private articulosService: ArticulosServiceService) { }

  ngOnInit(): void {
    this.articulosHombre = this.articulosService.getAll(1);
    console.log(this.articulosHombre) 
  }

}
