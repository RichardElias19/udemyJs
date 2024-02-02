const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let maior = 0
let menor = 0
let contador = 0
for (indice in lista) {
    if (contador === 0) {
        maior = lista[indice]
        menor = lista[indice]
    }
    else {
        if (menor > lista[indice]) {
            menor = lista[indice]
        } else if (maior < lista[indice]) {
            maior = lista[indice]
        }
    }
    contador++
}
console.log("Maior número:", maior)
console.log("Menor número:", menor)