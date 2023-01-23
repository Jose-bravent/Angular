//Crear una clase que haga lo siguiente. Tiene como parámero un texo y los siguientes métodos:
//contarCaracteres -> me devuelve el número de caracteres
//sustituir(caracterA, caracterB) -> sustituye el caracterA por el B. Hola que tal Sustituir('a', '*') -> H*l* que t*l (replace)
//eliminarBlancos -> elimina todos los espacios en blancos del texto. iniciales, finales y medio
//contarVocales -> contar el número de vocales. Que me diga el número total de vocales
//Otra variante-> que me diga el número de veces que está repetida cada vocal 

class Texto {

  text: string = '';

  constructor(t: string) {
    this.text = t;
  }

  contarCaracteres(): number {
    console.log('this.text')
    return this.text.length;
  }



}

let miTexto = new Texto('Este es un texto de ejemplo');
console.log(miTexto.contarCaracteres())

console.log(miTexto)
