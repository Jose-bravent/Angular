import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListadoAlumnosComponent } from './listado-alumnos/listado-alumnos.component';
import { FichaAlumnoComponent } from './ficha-alumno/ficha-alumno.component';
import { FormularioAlumnoComponent } from './formulario-alumno/formulario-alumno.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListadoAlumnosComponent,
    FichaAlumnoComponent,
    FormularioAlumnoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
