//Una clase persona, que tenga las propiedades nombre, apellidos, edad y los metodos nombreCompleto y mayor de edad.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MAYOR_EDAD = 18;
var Persona = /** @class */ (function () {
    function Persona(nom, ape, ed) {
        this.nombre = '';
        this.apellidos = '';
        this.edad = 0;
        this.nombre = nom;
        this.apellidos = ape;
        this.edad = ed;
    }
    Persona.prototype.setTelefono = function (tel) {
        this.telefono = tel;
    };
    Persona.prototype.getTelefono = function () {
        return this.telefono;
    };
    Persona.prototype.nombreCompleto = function () {
        return this.concatenar(this.nombre, this.apellidos);
    };
    Persona.prototype.mayorEdad = function () {
        return this.edad >= MAYOR_EDAD ? true : false;
    };
    Persona.prototype.concatenar = function (str1, str2) {
        return str1 + ' ' + str2;
    };
    return Persona;
}());
var Estudiante = /** @class */ (function (_super) {
    __extends(Estudiante, _super);
    function Estudiante(nom, ape, ed, cur) {
        var _this = _super.call(this, nom, ape, ed) || this;
        _this.curso = cur;
        _this.telefono;
        return _this;
    }
    Estudiante.prototype.mostrarCurso = function () {
        return 'Estoy en el curso: ' + this.curso;
    };
    return Estudiante;
}(Persona));
var persona1 = new Persona('Juan', 'Perez', 15);
var persona2 = new Persona('Maria', 'Gomez', 20);
console.log(persona1.nombreCompleto());
console.log(persona1.mayorEdad() ? 'Puedes entrar' : 'Lo siento eres menor y no puedes entrar');
var estudiante1 = new Estudiante('Pepe', 'Perez', 20, '1 de programacion');
//public, private, protected
var tupla;
tupla = ['usuario', 'contra', true];
var tallas;
(function (tallas) {
    tallas["xs"] = "XS";
    tallas["s"] = "S";
    tallas["m"] = "M";
    tallas["l"] = "L";
    tallas["xl"] = "XL";
})(tallas || (tallas = {}));
var camiseta = tallas.xs;
console.log(camiseta === 'XS');
console.log('fichero cambiado otra vez');
