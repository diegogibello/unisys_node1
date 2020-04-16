// cargamos el modulo http
const http = require('http')
const fs = require('fs')
const puerto = 3002
//Creamos el servidor Web

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile('./index1.html', 'utf8', (error, data)=> {
        if (error){
            res.writeHead(500, {'Content-Type': 'text/html'})
            res.end(error.message)
            return
        }
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(data)
    })
})

// Arrancamos el servidor
server.listen(puerto)

console.log('Escuchando en el puerto ',puerto)