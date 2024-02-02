let lista = [2, -3, 4, -5, 6, -7]
let negativo = 0
let positivo = 0
for(i in lista) {
    if(lista[i] < 0) {
        negativo++
    } else if(lista[i] > 0) {
        positivo++
    }
}
console.log(`No vetor [${lista}] temos ${negativo} numeros negativos e ${positivo} numeros positivos :D`)