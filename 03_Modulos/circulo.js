const pi = Math.PI
const area = function (r) {
    return (r * r * pi).toFixed(2)
}
const circunferencia = function (r) {
    return (2 * r * pi).toFixed(2)
}

exports.area = area 
module.exports.circunferencia = circunferencia

// incluir modulke si se sobreescribe el objeto entero module.exports = []