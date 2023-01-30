import { Component, OnInit } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';
import { ProductosServiceService } from '../services/productos-service.service';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  listadoProductos!: Producto[];
  

  constructor(private productosService: ProductosServiceService) { }

  ngOnInit(): void {
    this.listadoProductos = this.productosService.getAll();    
  }

  filtrarPrecios($event: any) {
    this.listadoProductos = this.productosService.getByPrice($event.preMin, $event.preMax);    
  }

  resetearFiltro() {   
    this.listadoProductos = this.productosService.getAll();
  }

  filtrarNombre($event: string) {   
    this.listadoProductos = this.productosService.getFilterByName($event);
  } 

}
