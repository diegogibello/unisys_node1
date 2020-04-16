const EventEmitter = require('events')
const emisor = new EventEmitter()

const telefono = (ev = {}) => {
    // if (ev && ev.tipo === 'pro'){
    if (ev.tipo === 'pro'){
        console.log('ring, ring, ring')
    }else{
        console.log('ring, ring')
    }
}

emisor.on('telefonear', telefono)


emisor.once('telefonear', () => {
    console.log('Brr, Brr')
})

emisor.emit('telefonear')
emisor.emit('telefonear')
emisor.emit('telefonear', {tipo: 'pro'})

emisor.off('telefonear', telefono)
emisor.emit('telefonear')