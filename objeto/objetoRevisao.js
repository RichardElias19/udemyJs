//coleção dinamica de pares chave/valor

const produto = new Object
produto.nome = 'cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)


const carro = {
    modelo: 'BMW',
    valor: 200000,
    proprietario: {
        nome: 'julio',
        idade: 40,
        endereco: {
            lograduro: 'rua abc',
            numero: 123
        }

    },
    condutores: [{
        nome: 'junior',
        idade: 19

    }, {
        nome: 'ana',
        idade: 20
    }],
    calcularValorSeguro: function() {
        //...
    }
}
carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['lograduro'] = 'av gigante'

console.log(carro)

// Delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)