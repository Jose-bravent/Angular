import { Component, OnInit } from '@angular/core';
import { Alumno } from '../interfaces/alumno.interface';
import { AlumnosServiceService } from '../services/alumnos-service.service';

@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.css']
})
export class FormularioAlumnoComponent implements OnInit {
  cursos!: any[];
  alumno: Alumno = {
    nombre: '',
    edad: 0,
    email: '',
    curso: 0
  };

  constructor(private alumnosService: AlumnosServiceService) { }

  ngOnInit(): void {
    this.cursos = this.alumnosService.getCursos();
  }
  guardar() {
    const response = this.alumnosService.addAlumno({...this.alumno, curso: Number(this.alumno.curso)});
    this.alumno = {
      nombre: '',
      edad: 0,
      email: '',
      curso: 0
    };
    alert(response.message)
  }
}
