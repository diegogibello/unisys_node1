// cargamos el modulo http
const http = require('http')
const puerto = 3001
//Creamos el servidor Web

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end('<header><h1>Hola Unisys</h1></header>')
})

// Arrancamos el servidor
server.listen(puerto)

console.log('Escuchando en el puerto ',puerto)