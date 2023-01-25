import { Component, OnInit } from '@angular/core';
import { Alumno } from '../interfaces/alumno.interface';
import { AlumnosServiceService } from '../services/alumnos-service.service';

@Component({
  selector: 'app-listado-alumnos',
  templateUrl: './listado-alumnos.component.html',
  styleUrls: ['./listado-alumnos.component.css']
})
export class ListadoAlumnosComponent implements OnInit {

  alumnos!: Alumno[];
  cursos!: any[];

    //Inyectar el servicio en el constructor
  constructor(private alumnosService: AlumnosServiceService) { }

  ngOnInit(): void {
    this.alumnos = this.alumnosService.getAll();
    this.cursos = this.alumnosService.getCursos();     
  } 

  seleccionarCurso($event: any) {
    const cursoSeleccionado:number = Number($event.target.value);
    this.alumnos = this.alumnosService.getByCurso(cursoSeleccionado);
  }

  eliminar($event: any) {    
    const response = this.alumnosService.deleteAlumno($event);
    this.alumnos = this.alumnosService.getAll();
    alert(response.message)
  }

}
