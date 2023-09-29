var cowsay = require("./cowsay.js");

let areas = require("./Areas.js");
let a=areas.CalcularAreaCuadrado(4);

console.log(a);

console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "U "
}));


