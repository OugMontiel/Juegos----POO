import {personaje} from "./personaje.js";
import {mago} from "./mago.js";
import {guerrero} from "./guerrero.js";

let personajeDefaul = new personaje();
let personajeGuerrero = new mago("manuel");
let personajeMago = new guerrero("maria");

console.log(personajeDefaul)
console.log(personajeGuerrero)
console.log(personajeMago)