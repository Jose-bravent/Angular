import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';
import { ServiciosComponent } from './servicios/servicios.component';

const routes: Routes = [
  {path: "", pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'servicios', component: ServiciosComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'productos', redirectTo: 'servicios'},
  {path: "**", component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
