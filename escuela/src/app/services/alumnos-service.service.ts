import { Injectable } from '@angular/core';
import { Alumno } from '../interfaces/alumno.interface';

@Injectable({
  providedIn: 'root'
})
export class AlumnosServiceService {

  private listadoAlumnos: Alumno[] = [
    {
      nombre: 'Jose Carlos',
      edad: 30,
      email: 'josecarlos@gmail.com',
      curso: 2,
    },
    {
      nombre: 'Radif El noum',
      edad: 27,
      email: 'radif@gmail.com',
      curso: 3
    },
    {
      nombre: 'Francisco',
      edad: 32,
      email: 'francisco@gmail.com',
      curso: 2
    },
    {
      nombre: 'Patricia',
      edad: 22,
      email: 'patricia@gmail.com',
      curso: 6
    },
    {
      nombre: 'Isabel',
      edad: 23,
      email: 'isabel@gmail.com',
      curso: 6
    },
    {
      nombre: 'Antonio',
      edad: 33,
      email: 'antonio@gmail.com',
      curso: 3
    },
    {
      nombre: 'Franco',
      edad: 34,
      email: 'franco@gmail.com',
      curso: 3
    },
  ]

  private cursos: any = [
    {value: 1, name: '1 Primaria'},
    {value: 2, name: '2 Primaria'},
    {value: 3, name: '3 Primaria'},
    {value: 4, name: '4 Primaria'},
    {value: 5, name: '5 Primaria'},
    {value: 6, name: '6 Primaria'},
    {value: 7, name: '1 Eso'},
    {value: 8, name: '2 Eso'},
    {value: 9, name: '3 Eso'},
    {value: 10, name: '4 Eso'},
  ]
  
  constructor() { }

  getAll() {
    return this.listadoAlumnos;
  }

  getCursos() {
    return this.cursos;
  }

  getByCurso(curso: number) {
    if (curso === 0) {
      return this.listadoAlumnos;
    }
    return this.listadoAlumnos.filter(alumno => alumno.curso === curso);
  }

  addAlumno(alumno: Alumno) {
    this.listadoAlumnos.push(alumno);
    return {message: 'Alumno creado correctamente'}    
  }

  deleteAlumno(alumno: Alumno) {    
    this.listadoAlumnos = this.listadoAlumnos.filter(alum => alum.nombre !== alumno.nombre && alum.email !== alumno.email && alum.edad !== alumno.edad);
    return {message: 'Alumno eliminado correctamente'}
  }
}
