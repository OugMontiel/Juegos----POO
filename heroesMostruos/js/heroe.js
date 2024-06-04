import { criaturas } from './criaturas.js'
export class heroe extends criaturas {
    constructor(nombre, vida, vidaMaxima, ataque) {
        super(nombre, vida, vidaMaxima, ataque);
    }
}