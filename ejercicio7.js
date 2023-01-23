"use strict";
//Crear una clase que haga lo siguiente. Tiene como parámero un texo y los siguientes métodos:
//contarCaracteres -> me devuelve el número de caracteres
//sustituir(caracterA, caracterB) -> sustituye el caracterA por el B. Hola que tal Sustituir('a', '*') -> H*l* que t*l (replace)
//eliminarBlancos -> elimina todos los espacios en blancos del texto. iniciales, finales y medio
//contarVocales -> contar el número de vocales. Que me diga el número total de vocales
//Otra variante-> que me diga el número de veces que está repetida cada vocal 
exports.__esModule = true;
var Texto = /** @class */ (function () {
    function Texto(t) {
        this.text = '';
        this.text = t;
    }
    Texto.prototype.contarCaracteres = function () {
        console.log('this.text');
        return this.text.length;
    };
    Texto.prototype.sustituir = function (carA, carB) {
        return this.text.replaceAll(carA, carB);
    };
    Texto.prototype.eliminarBlancos = function () {
        //return this.text.split(' ').join('');
        return this.text.replaceAll(' ', '');
    };
    Texto.prototype.contarVocales = function () {
        var vocales = ['a', 'e', 'i', 'o', 'u'];
        var cont = 0;
        for (var i = 0; i <= this.text.length - 1; i++) {
            if (vocales.indexOf(this.text[i].toLowerCase()) !== -1) {
                cont++;
            }
        }
        return cont;
    };
    Texto.prototype.contarVocales2 = function () {
        var vocales = ['a', 'e', 'i', 'o', 'u'];
        var contadores = {
            a: 0,
            e: 0,
            i: 0,
            o: 0,
            u: 0
        };
        for (var i = 0; i < this.text.length; i++) {
            if (vocales.indexOf(this.text[i].toLowerCase()) !== -1) {
                contadores[this.text[i]]++;
            }
        }
        return contadores;
    };
    return Texto;
}());
var miTexto = new Texto('   Este es un    texto de ejemplo   ');
console.log('El texto tiene: ' + miTexto.contarCaracteres() + ' ' + 'caracteres');
console.log(miTexto.sustituir('e', '*'));
console.log(miTexto.eliminarBlancos());
console.log('Vocales: ' + miTexto.contarVocales());
console.log(miTexto.contarVocales2());
console.log(miTexto);
