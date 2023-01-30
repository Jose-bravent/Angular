import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ListadoHombreComponent } from './listado-hombre/listado-hombre.component';
import { ListadoMujerComponent } from './listado-mujer/listado-mujer.component';
import { FichaComponent } from './ficha/ficha.component';
import { DetalleComponent } from './detalle/detalle.component';
import { Componente404Component } from './componente404/componente404.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ListadoHombreComponent,
    ListadoMujerComponent,
    FichaComponent,
    DetalleComponent,
    Componente404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
