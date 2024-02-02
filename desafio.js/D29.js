const numeros = [3, 8, 10, 12, 13, 17, 20, 24, 29, 33, 666]
let dentro = 0
let fora = 0

for (indice in numeros) {
    if (numeros[indice] >= 10 && numeros[indice] <= 20) {
        dentro++
    }
    else {
        fora++
    }
}
console.log(`Na lista ${numeros}.`)
console.log(`A quantidade de numeros dentro do intervalo de 10 a 20 são ${dentro} numeros.`)
console.log(`A quantidade de numeros fora do intervalo de 10 a 20 são ${fora} numeros.`)