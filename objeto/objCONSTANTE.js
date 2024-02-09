// pessoa -> 123 -> {...}
const pessoa = {nome: 'joao'}
pessoa.nome = 'pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = {nome: 'ana'}

Object.freeze(pessoa)

pessoa.nome = 'maria'
pessoa.end ='rua abc'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaconstante = Object.freeze({nome: 'joao'})
pessoaconstante.nome = 'maria'
console.log(pessoaconstante)