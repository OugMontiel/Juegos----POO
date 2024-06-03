import {personaje} from "./personaje.js"
export class mago extends personaje {
    #arma
    constructor(nom) {
        super();
        this.setNombre = nom
        this.setVida = 15
    }
    armadura() {
        if (this.#arma) this.setDefensa = 100
    }
}