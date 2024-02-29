Array.prototype.map2 = function(callback) {
    const lista = []
    for (let i = 0; i < this.length; i++){
        lista.push(callback(this[i], i, this))
    }
    return lista
}

const carrinho = [
    '{ "nome": "Borracha", "preço": 3.45 }',
    '{ "nome": "caderno", "preço": 13.90 }',
    '{ "nome": "Kit de lapis", "preço": 41.22 }',
    '{ "nome": "Caneta", "preço": 7.50 }'
]

// retornar um array apenas com preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preço

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)