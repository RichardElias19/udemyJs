/** Criar uma função que receba um array de números e retorne o menor número dessa array. 
 
menorNumero([10,5,35,65]) //retornará 5
menorNumero([5,-15,50,3]) //retornará -15
*/

const menorNumero = valor => {
    let menor = 0
    for (indice in valor) {
        if (indice == 0) {
            menor = valor[indice]
        }
        else {
            if (valor[indice] < menor) {
                menor = valor[indice]
            }
        }
    }
    console.log(menor)
}

menorNumero([10,5,35,65]) //retornará 5
menorNumero([5,-15,50,3]) //retornará -15
