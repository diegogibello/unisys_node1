function crearCuadrado() {
    return{
         area : function (r) {
            return (r * r ).toFixed(2)
        },
        perimetro : (r) => {
            return (4 * r ).toFixed(2)
        }
    }
}

module.exports = crearCuadrado