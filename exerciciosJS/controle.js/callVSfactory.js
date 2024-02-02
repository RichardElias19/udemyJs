class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p1 = new Pessoa('Pedro')
p1.falar()

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('João')
p2.falar()
desafioFuncaoConstrutora.js
//class Pessoa {
//    constructor(nome) {
//      this.nome = nome
//    }
//    falar() {
//        console.log(Meu nome é ${this.nome})
//   }
//}
//const p1 = new Pessoa('Pedro')
//p1.falar()


// Transformar isso acima para uma funcao constutora

function funcaoConstrutora(nome) {
    this.nome = nome
    this.noConsole = function () {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const falar = new funcaoConstrutora('Pedro')
falar.noConsole()
iife.js
// IIFE -> Immediately Invoked Function Expression

(function () {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()