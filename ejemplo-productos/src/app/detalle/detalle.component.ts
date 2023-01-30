import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../interfaces/producto.interface';
import { ProductosServiceService } from '../services/productos-service.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  producto!: Producto;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private productoService: ProductosServiceService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param)=>{
      console.log(param)
      const url = param['referencia'].split('-');
      const referencia = url[url.length - 1]
      const response = this.productoService.getByReference(referencia);
     
      if (response) {
        this.producto = response;
      } /* else {
        this.router.navigate(['/home']);
      }  */
    });

    
  }

}
