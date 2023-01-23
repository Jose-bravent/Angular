let numero: number = Number(prompt('Introduce un número: '))

function esPar (num: number): boolean {
  let par: boolean = false;
  if (num % 2 === 0) {
    par = true;
  }
  return par;
}

function esPar2 (num: number): string {
  //let mensaje: string;
  /* if (num % 2 !== 0) {
    mensaje = 'Impar'
  }  */
  
  
  return (num % 2 === 0) ? 'Par' : 'Impar';
}

const esPar3 = (num: number): string => (num % 2 === 0) ? 'Par' : 'Impar';

console.log(esPar3(numero))

