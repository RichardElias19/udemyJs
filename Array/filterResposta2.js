Array.prototype.filter2 = function (callback) {
    for (let i = 0; i < this.length; i++) {
        lista.push(callback(this[i], i, this))
    }
    return lista
}

const produtos = [

    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Ipad pro', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de plastico', preco: 18.99, fragil: false }

]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))