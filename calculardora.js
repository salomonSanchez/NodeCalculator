'use strict';

module.exports.suma3 = function (valor1, valor2){
    return valor1 + valor2;
}

module.exports.restar = function (valor1, valor2){
    return valor1 - valor2;
}

module.exports.multiplicar = function (valor1, valor2){
    return valor1 * valor2;
}

module.exports.dividir = function (valor1, valor2){   
    if (valor2==0){
        mostrarErrorDivision();
    }
    else{
        return valor1/valor2;
    }
}

function mostrarErrorDivision() {
    console.log('No se puede dividir por cero');
}

module.exports.sumarVariosNumeros = function(valor1,valor2,valor3,valor4){
    return valor1+valor2+valor3+valor4;
}

module.exports.restarVariosNumeros = function(valor1,valor2,valor3,valor4){
    return valor1-valor2-valor3-valor4;
}
/**
 * module.exports.calcularGrados = function(celsius){
var fahrenheit = (celsius * (9/5)) +32;
 return fahrenheit;
}
 */
//convertir moneda dolares a soles
module.exports.calculrMoneda = function(dolares){
    var soles = (dolares * (33/10));
    return soles;
    }