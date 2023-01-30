import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { FormularioProductoComponent } from './formulario-producto/formulario-producto.component';
import { ListadoComponent } from './listado/listado.component';
import { OpinionesComponent } from './opiniones/opiniones.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  {path: "", pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: ListadoComponent},
  {path: 'listado', redirectTo: 'home'},
  {path: 'nuevo-producto', component: FormularioProductoComponent},
  {path: 'producto/:referencia', component: DetalleComponent},   
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
