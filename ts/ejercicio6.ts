/* La letra del DNI se calcula dividiendo el número de documento entre 23. A partir del resto, se
obtiene la letra a partir de los caracteres del siguiente array: */



//pedir numero, convertirlo en cadena
//dividir entre 23 y coger el resto;  resto = numero % 23
//letras[resto]

function calcularLetraDni(numero: number): string {
  let letras: string[] = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
  const resto: number = numero % 23;
  return letras[resto]
}

console.log(calcularLetraDni(10077913))

const docu: string | null = prompt('Introduce el numero del DNI: ')
//const letra: string | null = prompt('Introduce la letra del DNI: ')
if (docu) {
  const longitud = docu?.length;
  const letra = docu[longitud - 1];
  const documento = docu.slice(0, longitud-1)  
  if (letra === calcularLetraDni(Number(documento))) {
    console.log('Correcto')
  } else {
    console.log('Incorrecto')
  }
}


//(letra === calcularLetraDni(Number(documento))) ? console.log('Correcto') : console.log('Incorrecto')


//Crear una clase que haga lo siguiente. Tiene como parámero un texo y los siguientes métodos:
//contarCaracteres -> me devuelve el número de caracteres
//sustituir(caracterA, caracterB) -> sustituye el caracterA por el B. Hola que tal Sustituir('a', '*') -> H*l* que t*l (replace)
//eliminarBlancos -> elimina todos los espacios en blancos del texto. iniciales, finales y medio
//contarVocales -> contar el número de vocales. Que me diga el número total de vocales
//Otra variante-> que me diga el número de veces que está repetida cada vocal 

