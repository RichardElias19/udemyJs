/** Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
 
somarNumeros([10,10,10]) // retornará 30
somarNumeros([15,15,15,15]) // retornará 60
*/

function somarNumeros(numeros) {
    return numeros.reduce((numero1, numero2) => numero1 + numero2, 0)
}

console.log(somarNumeros([10, 10, 10])); // Deverá retornar 30
console.log(somarNumeros([15, 15, 15, 15])); // Deverá retornar 60
