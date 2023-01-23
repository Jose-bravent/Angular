/* La letra del DNI se calcula dividiendo el número de documento entre 23. A partir del resto, se
obtiene la letra a partir de los caracteres del siguiente array: */
//pedir numero, convertirlo en cadena
//dividir entre 23 y coger el resto;  resto = numero % 23
//letras[resto]
function calcularLetraDni(numero) {
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    var resto = numero % 23;
    return letras[resto];
}
console.log(calcularLetraDni(10077913));
var docu = prompt('Introduce el numero del DNI: ');
//const letra: string | null = prompt('Introduce la letra del DNI: ')
if (docu) {
    var longitud = docu === null || docu === void 0 ? void 0 : docu.length;
    var letra = docu[longitud - 1];
    var documento = docu.slice(0, longitud - 1);
    console.log(documento);
    console.log(letra);
    if (letra === calcularLetraDni(Number(documento))) {
        console.log('Correcto');
    }
    else {
        console.log('Incorrecto');
    }
}
//(letra === calcularLetraDni(Number(documento))) ? console.log('Correcto') : console.log('Incorrecto')
