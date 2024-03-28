/**Desenvolva uma funcao que recebe um caractere e uma string como parametros e retorne a quantidade de vezes q o caractere se repete na string. A funcao devera ser case-sensitive ou seja ira diferenciar maiusculas de minusculas ex:
 
contarCaractere("r", "A sorte favorece os audazes") // retornara 2
contarCaractere("c", "Conhece-te a ti mesmo") // retornara 1
*/

function contarCaractere(caractere, frase) {
    let contagem = 0;

    for (let i = 0; i < frase.length; i++) {

        if (frase[i] === caractere) {

            contagem++
        }
    }

    return contagem
}


console.log(contarCaractere("r", "A sorte favorece os audazes")); // retornará 2
console.log(contarCaractere("c", "Conhece-te a ti mesmo")); // retornará 1
