function Carro(velocidadeMaxima = 200, delta = 5){
    //atributo privado
    let velocidadeAtual = 0

    // metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    // metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)
tiposDeclaracao.js
console.log(soma(3, 4))// funciona em qualquer linha do codigo


// function declaration

function soma(x, y) {
    return x + y
}

// function expression

const sub = function (x, y) {
    return x- y
}

console.log(sub(16, 3))
// named function expression

const mult = function mult(x, y) {
    return x * y
}
console.log(mult(13, 3))