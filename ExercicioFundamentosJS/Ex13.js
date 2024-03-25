/**Crie uma funcao que receba um array de elementos e retorne um array somente com os numeros presentes no 
 
array recebido como parametro
ex:
filtrarNumeros(["javascript", 1, "3", "web", 20]) // retornara [1, 20]
filtrarNumeros(["a", "c"]) // retornara []
*/

const filtrarNumeros = (numero) => {
    const newarray = []
    for(let i = 0; i  <= numero.length - 1; i++) {
        if (typeof numero[i] === 'number') {
            newarray.push(numero[i])
        }
    }
    console.log(newarray)
}







filtrarNumeros(["javascript", 1, "3", "web", 20]) // retornara [1, 20]
filtrarNumeros(["a", "c"]) // retornara []