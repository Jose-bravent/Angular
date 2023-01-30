import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosServiceService {
  private productos: Producto[] = [
    { 
      nombre: 'Mesa de cocina',
      descripcion: 'Mesa de cocina de 30x60',
      preMin: 30,
      preMax: 50,
      referencia: 'MES12345',      
    },
    { 
      nombre: 'Silla de cocina',
      descripcion: 'Silla de cocina en varios colores',
      preMin: 25,
      preMax: 40,
      referencia: 'SIL12345'
    },
    { 
      nombre: 'Taburete',
      descripcion: 'Taburete de 3 patas',
      preMin: 15,
      preMax: 30,
      referencia: 'TAB12345'
    },
  ]
   

  constructor() { }

  getAll() {    
    return this.productos;
  }

  addProducto(prod: Producto) {
    this.productos.push(prod);    
    return 'Producto añadido correctamente';
  }

  getByReference(ref: string): Producto | undefined {
    return this.productos.find(prod => prod.referencia === ref)
  }

  getByPrice(preMin: number, preMax: number) {    
    return this.productos.filter(prod => prod.preMin >= preMin && prod.preMax <= preMax)
  }

  /* getByPrice(precioFiltro: any) {
    return this.productos.filter(prod => prod.preMin >= precioFiltro.preMin && prod.preMax <= precioFiltro.preMax)
  }  */

  getFilterByName(name: string) {
    return this.productos.filter(prod => prod.nombre.toLowerCase().includes(name.toLowerCase()));
  }

}
