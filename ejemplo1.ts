let cadena1: string = 'soy una cadena';
let numero1: number = 8;

let arr: number[]=[5,6,7]
let arr2: string[]=['Juan', 'Pedro']

function suma(numero1:number, numero2: number): number {  
  return numero1 + numero2;
}

for (let i: number = 1; i <= 20; i++) {

}

function saludo(nombre: string): void {
  console.log('Hola: ' + nombre);
}

let dato: string | null = prompt('Introduce un valor:')
console.log(dato)

console.log(dato?.toLocaleUpperCase())



let variable: any;

interface Persona {
  nombre: string;
  apellido: string;
  edad: number;
  dni?: string;
}

let persona: Persona = {
  nombre: 'Jose',
  apellido: 'Perez',
  edad: 24
}

let persona2: Persona = {
  nombre: 'Jose2',
  apellido: 'Perez2',
  edad: 25,
  dni: '123456'
}


console.log(persona.nombre)
console.log(persona?.dni)

//null.toLocaleUpperCase()
let otroNumero = suma(4,8)
//let otraCadena: string = suma(4,7)


