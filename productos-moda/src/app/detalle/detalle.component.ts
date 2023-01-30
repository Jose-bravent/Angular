import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Articulo } from '../interfaces/articulo';
import { ArticulosServiceService } from '../services/articulos-service.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  articuloCompleto!: Articulo;
  constructor(private activateRoute: ActivatedRoute,
              private articulosService: ArticulosServiceService,
              private router: Router ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(param => {
      console.log(param)
      const descripcion = param['descripcion'].split('-');
      const id = descripcion[descripcion.length - 1];
      const response = this.articulosService.getById(parseInt(id))
      if (response) {
        this.articuloCompleto = response;
      }
    })    
  }

  volver() {    
    if (this.articuloCompleto.gender === 0) {
      this.router.navigate(['/mujer']);
    } else {
      this.router.navigate(['/hombre']);
    }
  }

}
