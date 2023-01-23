var numero = Number(prompt('Introduce un número: '));
function esPar(num) {
    var par = false;
    if (num % 2 === 0) {
        par = true;
    }
    return par;
}
function esPar2(num) {
    //let mensaje: string;
    /* if (num % 2 !== 0) {
      mensaje = 'Impar'
    }  */
    return (num % 2 === 0) ? 'Par' : 'Impar';
}
var esPar3 = function (num) { return (num % 2 === 0) ? 'Par' : 'Impar'; };
console.log(esPar3(numero));
