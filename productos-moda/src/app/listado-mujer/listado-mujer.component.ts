import { Component, OnInit } from '@angular/core';
import { ArticuloSimple } from '../interfaces/articulo';
import { ArticulosServiceService } from '../services/articulos-service.service';

@Component({
  selector: 'app-listado-mujer',
  templateUrl: './listado-mujer.component.html',
  styleUrls: ['./listado-mujer.component.css']
})
export class ListadoMujerComponent implements OnInit {
  articulosMujer!: ArticuloSimple[];

  constructor(private articulosService: ArticulosServiceService) { }

  ngOnInit(): void {
    this.articulosMujer = this.articulosService.getAll(0);
  }

}
