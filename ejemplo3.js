var cadena = prompt('Introduce un número: ');
function longitud(cadena) {
    return cadena ? cadena.length : 0;
}
//console.log(cadena ? longitud(cadena) : 'La cadena es nula')
console.log(longitud(cadena));
