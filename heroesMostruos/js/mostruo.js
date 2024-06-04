import { criaturas } from './criaturas.js'
export class mostruo extends criaturas {
    constructor(nombre, vida, vidaMaxima, ataque) {
        super(nombre, vida, vidaMaxima, ataque);
        if (this.constructor === mostruo) {
            throw new ClaseNoInstanciableError(this)
          }
    }
}