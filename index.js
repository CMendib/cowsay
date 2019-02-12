var cowsay = require('cowsay');
const intro = require ('./intro');
const nudo = require ('./nudo');
const final = require ('./final');

let nombre = "Anuar";
let fraceVaquita = "Surcaré los 7 mares de pasto";
let historia = "Hola, mi nombre es " + nombre + ". Y hoy me enconté con una vaquita pitara que decía: " + fraceVaquita;

let personaje = "Anuar";
let villano = "Juan";
let lugar = "Centraal";
let hobby = "programar";
let hecho = "pidió";
let cosa = "una pizza";
let paso = "no llegaba";
let termino = "comimos pizza";
const edad = Math.floor(Math.random()*100);


//Math.round() redondea
// Math.floor () redondea hacia abajo
//Math.ceil() Redondea hacia arriba

console.log(intro.historia(personaje,lugar,edad),nudo.historia2(hecho,cosa),final.historia3(paso,termino ));

console.log(cowsay.say({
  text : fraceVaquita,
  e : "x-o",
  T : "v "
}));
