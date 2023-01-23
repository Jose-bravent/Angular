//Ejercicio. Funcion que me diga Fizz si un número es multiplo de 3, Buzz si es múltiplo de 5 y FizzBuzz si es multiplo de ambos.
//Aplicar la función a los 20 primeros números (1, 2, 3,... 20)
function fuzzBizz(num) {
    var resultado = '';
    if (num % 5 === 0 && num % 3 === 0) {
        resultado = 'FizzBuzz';
    }
    else if (num % 5 === 0) {
        resultado = 'Buzz';
    }
    else if (num % 3 === 0) {
        resultado = 'Fizz';
    }
    return resultado;
}
function fuzzBizz3(num) {
    if (num % 5 === 0 && num % 3 === 0) {
        return 'FizzBuzz';
    }
    else if (num % 5 === 0) {
        return 'Buzz';
    }
    else if (num % 3 === 0) {
        return 'Fizz';
    }
    return '';
}
for (var i = 1; i <= 20; i++) {
    console.log('numero: ' + i + ' ' + fuzzBizz(i));
}
function fuzzBizz2(num) {
    var resultado = '';
    if (num % 5 === 0 && num % 3 === 0) {
        resultado = 'FizzBuzz';
    }
    else if (num % 5 === 0) {
        resultado = 'Buzz';
    }
    else if (num % 3 === 0) {
        resultado = 'Fizz';
    }
    return {
        resultado: resultado,
        numero: num
    };
}
for (var i = 1; i <= 20; i++) {
    var result = fuzzBizz2(i);
    console.log('numero: ' + result.numero + ' ' + result.resultado);
}
