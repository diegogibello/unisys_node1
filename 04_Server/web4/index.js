// cargamos el modulo http
const http = require('http')
const fs = require('fs')
const puerto = 3003
//Creamos el servidor Web
let fichero = ''
const server = http.createServer((req, res) => {

    console.log(req.url)
    switch (req.url) {
        case '/':
            fichero = './index.html'
            break;

            case '/about':
                fichero = './about.html'
                break;
    
        default:
            res.writeHead(404, {'Content-Type': 'text/html'})
            res.end('<header><h1>Error 404</h1></header>')
            return;
    }

    fs.readFile(fichero, 'utf8', (error, data)=> {
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