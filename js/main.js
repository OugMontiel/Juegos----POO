import {criaturas} from './criaturas.js'
import {heroe} from './heroe.js'
import {mostruo} from './mostruo.js'
import {
    orco,
    goblin,
    kobold
} from './clasesDeMostruos.js'
import {juego} from './juego.js'

// Crear una instancia del heroe
const myHerue = new heroe('Deigo', 150, 150, 35);

// Crear una instancia del juego
const Juego = new juego(myHerue);

// Investigar un nuevo monstruo
Juego.investigar(); // Asigna un nuevo monstruo aleatorio

// Atacar al monstruo
Juego.atacar(); // Ataca al monstruo actual

// Repetir acciones según sea necesario
