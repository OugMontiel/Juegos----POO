export class criaturas {
    constructor(nombre, vida, vidaMaxima, ataque) {
        if (this.constructor === criaturas) {
            throw new ClaseNoInstanciableError(this)
          }
        this.nombre = nombre
        this.vida = vida
        this.vidaMaxima = vidaMaxima
        this.ataque = ataque
    }
}
