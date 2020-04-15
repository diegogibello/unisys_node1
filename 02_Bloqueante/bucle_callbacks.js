const lineas =['Linea 1', 'Linea 2','Linea 3','Linea 4']
let n=0

function escribeLuego(t, txt, callback) {
    setTimeout(() => {
        console.log(txt)
        callback()
    }, t)
}

serie = (time,textos,mainFuction,finalCallback) => {
if (n=== textos.length){
    finalCallback()
    return
}
    escribeLuego(time,textos[n], () => {
        serie = (time,textos,mainFuction,finalCallback)
    })
    n++
}

console.log('Inicio')
serie(100,lineas,escribeLuego, () => {})