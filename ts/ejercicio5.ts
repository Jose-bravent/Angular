//Ejercicio. Funcion que me diga Fizz si un número es multiplo de 3, Buzz si es múltiplo de 5 y FizzBuzz si es multiplo de ambos.

//Aplicar la función a los 20 primeros números (1, 2, 3,... 20)



function fuzzBizz (num: number): string {
  let resultado: string = ''

  if (num % 5 === 0 && num % 3 === 0 ) {
    resultado = 'FizzBuzz';
  } else if (num % 5 === 0) {
    resultado = 'Buzz';
  } else if (num % 3 === 0) {
    resultado = 'Fizz'
  }

  return resultado
}

function fuzzBizz3 (num: number): string {  

  if (num % 5 === 0 && num % 3 === 0 ) {
    return 'FizzBuzz';    
  } else if (num % 5 === 0) {
    return 'Buzz';
  } else if (num % 3 === 0) {
    return 'Fizz'
  }

  return ''
}

for (let i:number = 1; i <= 20; i++) {
  console.log('numero: ' + i + ' ' + fuzzBizz(i));
}

interface Resultados {
  resultado: string;
  numero: number;
}

function fuzzBizz2 (num: number): Resultados {
  let resultado: string = ''

  if (num % 5 === 0 && num % 3 === 0 ) {
    resultado = 'FizzBuzz';
  } else if (num % 5 === 0) {
    resultado = 'Buzz';
  } else if (num % 3 === 0) {
    resultado = 'Fizz'
  }

  return {
    resultado: resultado,
    numero: num
  }
}


for (let i:number = 1; i <= 20; i++) {
  let result = fuzzBizz2(i);
  console.log('numero: ' + result.numero + ' ' + result.resultado);
}