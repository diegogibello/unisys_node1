// cargamos el modulo http
const http = require('http')
const puerto = 3000
//Creamos el servidor Web

const server = http.createServer((req, res) => {
    res.end('Servidor Socket.io')
})

const io = require('socket.io')(server)

io.on('connection', (socket) => {
    console.log('Socket conectado')
    socket.emit('message', {server: 'Saludos'})
    socket.on('reponse',(data) => {
        console.log(data)
    })
})
// Arrancamos el servidor
server.listen(puerto)

console.log('Escuchando en el puerto ',puerto)