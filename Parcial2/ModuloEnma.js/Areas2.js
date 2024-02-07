
export function CalcularAreaCuadrado(lado) {
    return lado*lado
}

export function CalcularAreaTriangulo(Base,Altura) {
    return (Base*Altura)/2
}

export function CalcularAreaCirculo(radio) {
    return (Math.PI * (radio*radio))
}

export function CalcularAreaRombo(diagonalMayor, diagonalMenor) {
    return (diagonalMayor*diagonalMenor)/2
}
