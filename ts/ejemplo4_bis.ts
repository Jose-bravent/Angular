//Una clase persona, que tenga las propiedades nombre, apellidos, edad y los metodos nombreCompleto y mayor de edad.

interface DatosPersona {
  nombre: string;
  apellidos: string;
  edad: number;
  nombreCompleto(): string;
  mayorEdad?(): boolean;
}

const MAYOR_EDAD = 18;

class Persona implements DatosPersona {
  
  nombre: string = '';
  apellidos: string = '';
  edad: number = 0;
  protected telefono: string;
  
  constructor(nom: string, ape: string, ed: number) {
    this.nombre = nom;
    this.apellidos = ape;
    this.edad = ed
  }

  setTelefono(tel: string) {
    this.telefono = tel;
  }

  getTelefono() {
    return this.telefono;
  }

  nombreCompleto(): string {
    return this.concatenar(this.nombre, this.apellidos);
  }

  mayorEdad(): boolean {
    return this.edad >= MAYOR_EDAD ? true : false;
  }

  private concatenar (str1: string, str2: string): string {
    return str1 + ' ' + str2;
  }
}

class Estudiante extends Persona {
  curso: string;

  constructor(nom, ape, ed, cur) {
    super(nom, ape, ed);
    this.curso = cur;
    this.telefono
  }

  mostrarCurso(): string {
    return 'Estoy en el curso: ' + this.curso;
  }
}

const persona1 = new Persona('Juan', 'Perez', 15)

const persona2 = new Persona('Maria', 'Gomez', 20)

console.log(persona1.nombreCompleto());
console.log(persona1.mayorEdad() ? 'Puedes entrar' : 'Lo siento eres menor y no puedes entrar')

const estudiante1 = new Estudiante ('Pepe', 'Perez', 20, '1 de programacion')

//public, private, protected

let tupla: [string, string, boolean]

tupla = ['usuario', 'contra',true]

enum tallas {
  xs = 'XS',
  s = 'S',
  m = 'M',
  l = 'L',
  xl = 'XL'
}

let camiseta: tallas = tallas.xs

console.log(camiseta === 'XS')
console.log('fichero cambiado otra vez')