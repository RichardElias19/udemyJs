/**Desenvolva uma funcao que receba uma string como parametro e retorne essa string somente com as consoantes ou seja sem as vogais ex
 
removerVogais("Cod3r") // retornara "cd3r"
removerVogais("Fundamentos") // retornara "fndmnts"

*/

const removerVogais = frase => {
    let novaString = ""
    for(let caractere of frase.toLowerCase()){
        if(!["a","e","i","o","u"].includes(caractere)){
            novaString += caractere
        }
    }
    console.log(novaString)
}


removerVogais("Cod3r") // retornara "cd3r"
removerVogais("Fundamentos") // retornara "fndmnts"