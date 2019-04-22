
/**
 * const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hola Mundo\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
 */

var op = require('./calculardora');
console.log('La suma 3 da: ' + op.suma3(6,6));
console.log('La suma 3 da: ' + require('./calculardora').suma3(7,7));

//division
console.log('La division  da: ' + require('./calculardora').dividir(7,7));
console.log('resta: ' + require('./calculardora').restar(10,7));

//sumar y restar varios numeros
console.log('suma cuatro numeros:' + op.sumarVariosNumeros(4,4,4,4));
console.log('resta cuatro numeros:' + op.restarVariosNumeros(16,4,4,4));
/**
 * //conversor de grados c° a F°
console.log('conversor de grados c° a F°:' + op.calcularGrados(30));
 */
