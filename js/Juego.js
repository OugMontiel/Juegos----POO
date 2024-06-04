import { criaturas } from './criaturas.js'
import { heroe } from './heroe.js'
import { mostruo } from './mostruo.js'
import {
    orco,
    goblin,
    kobold
} from './clasesDeMostruos.js'

export class juego {
    constructor(myHeroe) {
        this.historial = [];
        this.monstruoEnRadar = null;
        this.heroe = myHeroe
        this.combate = new combate(this); // Instancia de la clase Combate
    }

}

class combate {
    constructor(juego) {
        this.juego = juego // Referencia a la instancia de la clase Juego
    }
    loguear(mensaje) {
        this.historial.push(mensaje);
        console.log(mensaje);
    }

    investigar() {
        if (this.monstruoEnRadar && this.monstruoEnRadar.vida > 0) {
            this.loguear('No puedes investigar, hay un monstruo vivo.');
            return;
        }

        const monstruos = [new orco(), new goblin(), new kobold()];
        const randomIndex = Math.floor(Math.random() * monstruos.length);
        this.monstruoEnRadar = monstruos[randomIndex];

        this.loguear(`Has encontrado un ${this.monstruoEnRadar.nombre}!`);
    }
    atacar() {
        if (!this.monstruoEnRadar) {
            this.loguear('No hay monstruo para atacar.');
            return;
        }

        if (this.monstruoEnRadar.vida <= 0) {
            this.loguear(`El ${this.monstruoEnRadar.nombre} ya está muerto.`);
            return;
        }

        this.monstruoEnRadar.vida -= this.heroe.ataque;
        this.loguear(`Atacas a ${this.monstruoEnRadar.nombre}! Le sacás ${this.heroe.ataque} de vida. Le quedan ${this.monstruoEnRadar.vida > 0 ? this.monstruoEnRadar.vida : 0} puntos de vida.`);

        if (this.monstruoEnRadar.vida <= 0) {
            this.loguear(`¡Has derrotado al ${this.monstruoEnRadar.nombre}!`);
        }
    }

}