
function CalcularAreaCuadrado(lado) {
    return lado*lado
}

function CalcularAreaTriangulo(Base,Altura) {
    return (Base*Altura)/2
}

function CalcularAreaCirculo(radio) {
    return (Math.PI * (radio*radio))
}

function CalcularAreaRombo(diagonalMayor, diagonalMenor) {
    return (diagonalMayor*diagonalMenor)/2
}

module.exports.CalcularAreaCuadrado = CalcularAreaCuadrado;
module.exports.CalcularAreaTriangulo = CalcularAreaTriangulo;
module.exports.calcularAreaCirculo = CalcularAreaCirculo;
module.exports.calcularAreaRombo = CalcularAreaRombo;
