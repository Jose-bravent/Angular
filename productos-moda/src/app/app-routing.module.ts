import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Componente404Component } from './componente404/componente404.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ListadoHombreComponent } from './listado-hombre/listado-hombre.component';
import { ListadoMujerComponent } from './listado-mujer/listado-mujer.component';

const routes: Routes = [
  { path: '', redirectTo: 'hombre', pathMatch: 'full' },
  { path: 'hombre', component: ListadoHombreComponent},
  { path: 'mujer', component: ListadoMujerComponent },
  { path: 'articulo/:descripcion', component: DetalleComponent},
  { path: '**', component: Componente404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
