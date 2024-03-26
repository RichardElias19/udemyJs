/*Desenvolva uma funcao que recebe um numero correspondente a um ano e retorna se ele  é bissexto ou nao: 
EX:
checarAnoBissexto(2020) // retorna true 
checarAnoBissexto(2100) // retorna false pois é multiplo de 100 e nao e multiplo de 400/

/* 
    Verifica se um ano é bissexto.

    Args:
        ano (int): O ano a ser verificado.

    Returns:
        bool: True se o ano for bissexto, False caso contrário.
*/

const checarAnoBissexto = numero => {
    if((numero % 100 !== 0 && numero % 4 == 0) || (numero % 400 == 0)) {
        console.log(true)
    } else {
        console.log(false)
    }
}
console.log(checarAnoBissexto(2020)) // Deverá imprimir 'true'
console.log(checarAnoBissexto(2021)) // Deverá imprimir 'false'

