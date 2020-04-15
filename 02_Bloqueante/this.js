// 'use strict'


const ob = {
    nombre : 'Pepe',
    // algo: function () {
    algo () {
        console.log(this)
    }
}

ob.algo()
const fuera = ob.algo
fuera()

function PruebaThis (name) {
    this.name = name
    console.log(this)
    setTimeout(function () {console.log(this)},1000)
    setTimeout(function () {console.log('Usando bind',this)}.bind(this),1000)
    setTimeout(() => {console.log('Usando arrow',this)},1000)
    this.saludar =  () => {
        console.log(`Hola soy ${this.name}`)
    }
}
PruebaThis.prototype.saludar = function () {
    console.log(`Hola soy ${this.name}`)
}
const pb1 = new PruebaThis('uno')
pb1.saludar()
console.log(pb1)