import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Alumno } from '../interfaces/alumno.interface';
import { AlumnosServiceService } from '../services/alumnos-service.service';

@Component({
  selector: 'app-ficha-alumno',
  templateUrl: './ficha-alumno.component.html',
  styleUrls: ['./ficha-alumno.component.css']
})
export class FichaAlumnoComponent implements OnInit {
@Input() datos!: Alumno;
@Input() cursos!: any[];
@Output() eliminar: EventEmitter<Alumno>;

cursoAlumno: any;

  constructor(private alumnosService: AlumnosServiceService) {  
    this.eliminar = new EventEmitter();
  }

  ngOnInit(): void { 
    this.cursoAlumno = this.cursos.find(curso => curso.value === this.datos.curso)
  }

  eliminarAlumno() {
    this.eliminar.emit(this.datos);
  }
}
