let areas=require("./Areas.js");
let areaCuadrado = areas.CalcularAreaCuadrado(4);
let areaTriangulo = areas.CalcularAreaTriangulo(4,5);
let areaCirculo = areas.calcularAreaCirculo(5);
let areaRombo = areas.calcularAreaRombo(4,3);

console.log(`El área del cuadrado es: ${areaCuadrado}`);
console.log(`El área del triangulo es: ${areaTriangulo}`);
console.log(`El área del círculo es: ${areaCirculo}`);
console.log(`El área del rombo es: ${areaRombo}`);

