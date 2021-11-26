export default class Pessoa{
    nome
    #cpf
    constructor(nome, cpf){

        this.nome = nome
        this.#cpf = cpf
    }

    imprime(){

        console.log(`Nome:${this.nome} CPF:${this.#cpf}`)
    }
}