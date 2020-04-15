function mostrarLuego(t, txt, callback) {
    setTimeout(() => {
        console.log(txt)
        callback()
    }, t)
}

console.log('Inicio')
mostrarLuego(1000, 'Linea1', () => {
    mostrarLuego(1000,'Linea 2', () => {
        mostrarLuego(1000, 'Linea 3', () => {
            console.log('Fin')
        })
    })
})
console.log('¿Cuando?')