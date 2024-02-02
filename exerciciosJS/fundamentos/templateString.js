const nome = "Rebeca"
const concatenacao = 'Ola ' + nome + '!' 
const template = `
Olá 
${nome}!`

console.log(concatenacao)
console.log(template)

// expressoes...
console.log(`1 + 1 = ${1 + 1}`) // crase usa quando vc que usar uma varialvel dentro de um texto

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado!')}`)