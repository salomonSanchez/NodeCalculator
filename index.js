
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

var suma3 = require('./calculardora');
console.log('La suma 3 da: ' + suma3.suma3(6,6));
console.log('La suma 3 da: ' + require('./calculardora').suma3(7,7));

//division
console.log('La division  da: ' + require('./calculardora').dividir(7,7));
console.log('resta: ' + require('./calculardora').restar(10,7));

//convertir kg a gramos 
console.log('convertir kg a gramos:'+require('./calculardora').convertidor(1));
