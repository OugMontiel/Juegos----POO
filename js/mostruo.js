import { criaturas } from './criaturas.js'
class mostruo extends criaturas {
    constructor(nombre, vida, vidaMaxima, ataque) {
        if (this.constructor === mostruo) {
            throw new ClaseNoInstanciableError(this)
          }
        super(nombre, vida, vidaMaxima, ataque);
    }
}