/** crie uma função que receba um array com uma quantidade indeterminada de números e retorne a média simples desses números.
 * 
caluclarMedia([0,10]) // retornará 5
caluclarMedia([1,2,3,4,5]) // retornará 3 */

const caluclarMedia = array => {
    let somador = 0
    for(let indice = 0; indice  <= array.length - 1; indice++) {
        somador += array[indice]
        // console.log(indice, array[indice])
    }
    console.log(somador / array.length)
}





caluclarMedia([0,10]) // retornará 5
caluclarMedia([1,2,3,4,5]) // retornará 3 