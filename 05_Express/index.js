const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res, next) => {
    res.send('Hola Mundo')
})

app.get('/user', (req, res, next) => {
    let user = req.param(name) ? req.param('name') : 'usuario'
    res.send(`Hola ${user}`)
})

app.get('*',(req, res, next) => {
    res.send('Aqui no hay nada')
})

app.listen(port, () => {
    console.log('Escuchando en el puerto ', port)
})