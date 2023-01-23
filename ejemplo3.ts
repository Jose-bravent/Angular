let cadena: string | null = prompt('Introduce un número: ');


function longitud (cadena: string): number {
  return cadena ? cadena.length : 0;
}

//console.log(cadena ? longitud(cadena) : 'La cadena es nula')
console.log(longitud(cadena))