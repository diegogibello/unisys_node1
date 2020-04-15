const c = require('./circulo.js')
const cu = require('./cuadrado.js')()

const r = 5
console.log(`El area del circulo es ${c.area(r)}`)
console.log(`La circunferencia del circulo es ${c.circunferencia(r)}`)
console.log(`El area del cuadrado es ${cu.area(r)}`)
console.log(`El perimetro del cuadrado es ${cu.perimetro(r)}`)