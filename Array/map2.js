const carrinho = [
    '{ "nome": "Borracha", "preço": 3.45 }',
    '{ "nome": "caderno", "preço": 13.90 }',
    '{ "nome": "Kit de lapis", "preço": 41.22 }',
    '{ "nome": "Caneta", "preço": 7.50 }'
]

// retornar um array apenas com preços

//const paraObjeto = json => JSON.parse(json)
//const apenasPreco = produto => produto.preco

//const resultado = carrinho.map(paraObjeto).map(apenasPreco)
//console.log(resultado)

//Resposta do professor

let resultado = carrinho.map(item => JSON.parse(item).preço)
console.log(resultado)