/* Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias. Considere 1 ano como 365 */


const pessoa = idade => {
    const i = idade * 365
    return  `a sua idade em dias e ${i}`
}

console.log(pessoa(23)) // forma mais certa 




const pessoa2 = idade => `a sua idade em dias e ${idade * 365}` 

console.log(pessoa2(23))  // forma simplificada