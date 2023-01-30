import { Injectable } from '@angular/core';
import {listadoArticulos} from '../../bd/productos';
import { Articulo } from '../interfaces/articulo';

@Injectable({
  providedIn: 'root'
})
export class ArticulosServiceService {
  
  constructor() { 
    
  }

  getAll(genero: number) {
    return listadoArticulos
    .filter((articulo: Articulo) => articulo.gender === genero || articulo.gender === 2)
    .map(articulo => {  
      return {
        id: articulo.id,
        name: articulo.name,
        img: articulo.img,
        price: articulo.price   
      }   
    })
  }

  getById(id: number) {
    return listadoArticulos.find(articulo => articulo.id === id)
  }
}
