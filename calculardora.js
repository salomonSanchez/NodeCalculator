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