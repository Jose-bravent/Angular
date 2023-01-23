//Crear una clase que haga lo siguiente. Tiene como parámero un texo y los siguientes métodos:
//contarCaracteres -> me devuelve el número de caracteres
//sustituir(caracterA, caracterB) -> sustituye el caracterA por el B. Hola que tal Sustituir('a', '*') -> H*l* que t*l (replace)
//eliminarBlancos -> elimina todos los espacios en blancos del texto. iniciales, finales y medio
//contarVocales -> contar el número de vocales. Que me diga el número total de vocales
//Otra variante-> que me diga el número de veces que está repetida cada vocal 

import {IContadores} from './model/IContadores.interface'

class Texto {

  text: string = '';

  constructor(t: string) {
    this.text = t;
  }

  contarCaracteres(): number {
    console.log('this.text')
    return this.text.length;
  }

  sustituir(carA: string, carB: string): string {
    return this.text.replaceAll(carA, carB);
  }

  eliminarBlancos(): string {
    //return this.text.split(' ').join('');
    return this.text.replaceAll(' ', '');
  }

  contarVocales(): number {
    const vocales = ['a','e','i','o','u'];
    let cont = 0;
    for (let i:number = 0; i <= this.text.length - 1; i++) {
      if (vocales.indexOf(this.text[i].toLowerCase()) !== -1) {
        cont++;
      }
    }
    return cont
  }

  contarVocales2():any {
  
    const vocales: string[] = ['a', 'e', 'i', 'o', 'u'];
    
    const contadores: IContadores = {
      a: 0, 
      e: 0, 
      i: 0, 
      o: 0, 
      u: 0  
    }  
      
    for (let i:number=0; i < this.text.length; i++) {
      if (vocales.indexOf(this.text[i].toLowerCase()) !== -1) {
        contadores[this.text[i]]++;
      } 
    }
    
    return contadores;
  }


}

let miTexto = new Texto('   Este es un    texto de ejemplo   ');
console.log('El texto tiene: ' + miTexto.contarCaracteres() + ' ' + 'caracteres');
console.log(miTexto.sustituir('e', '*'));
console.log(miTexto.eliminarBlancos());
console.log('Vocales: ' + miTexto.contarVocales())
console.log(miTexto.contarVocales2())
console.log(miTexto)



