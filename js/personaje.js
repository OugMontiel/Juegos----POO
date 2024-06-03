export class personaje {
    #vida = 20;
    #defensa = 50;
    #dano = 5;
    constructor() {
    }
    set setNombre(nom = "Jhon") {
        this.nombre = nom
    }
    set setVida(puntos) {
        this.#vida += puntos
    }
    set setDefensa(puntos) {
        this.#defensa += puntos
    }
    set setDaño(puntos){
        this.#dano+=puntos
    }
    atacar(instrumento = 0) {
        if (instrumento) this.#dano += instrumento;
        return instrumento
    }

}