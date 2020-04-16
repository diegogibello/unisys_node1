// cargamos el modulo http
const http = require('http')
const puerto = 3000
//Creamos el servidor Web

const server = http.createServer((req, res) => {
    res.end('Hola Mundo')
})

// Arrancamos el servidor
server.listen(puerto)

console.log('Escuchando en el puerto ',puerto)