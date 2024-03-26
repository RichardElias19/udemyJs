/*Crie uma funcao que receba um array de produtos e retorne o total das despesas
ex
despesasTotais([
    {nome: "jornal online", categoria: "informacao", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
]) // retornara 239.99
////////////////////////////////////////////////////////////////////
despesasTotais([
    {nome: "galaxy s20", categoria: "Eletronicos", preco:3599.99},
    {nome: "MacBook Pro", categoria: "Eletronicos", preco: 30999.90}
]) // retornara 34599.89*/


function despesasTotais(produtos) {
    return produtos.reduce((numero1, produto) => numero1 + produto.preco, 0)
}


console.log(despesasTotais([
    {nome: "jornal online", categoria: "informacao", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
])); // Deve retornar 239.99

console.log(despesasTotais([
    {nome: "galaxy s20", categoria: "Eletronicos", preco: 3599.99},
    {nome: "MacBook Pro", categoria: "Eletronicos", preco: 30999.90}
])); // Deve retornar 34599.89