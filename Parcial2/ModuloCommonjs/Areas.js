
function areaCuadrado(lado)
{
    return lado*lado
}

function areaTriangulo(Base,Altura)
{
    return (Base*Altura)/2
}

module.exports.CalcularAreaCuadrado=areaCuadrado;
module.exports.CalcularAreaTriangulo=areaTriangulo;

console.log(module)