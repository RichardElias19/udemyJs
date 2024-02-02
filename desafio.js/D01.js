function calculo(a, b) {
    console.log(`a soma dos numeros ${a} e ${b} = ${a + b}`)
    console.log(`a subtracao dos numeros ${a} e ${b} = ${a - b}`)
    console.log(`a multiplicacao dos numeros ${a} e ${b} = ${a * b}`)
    const divisao = a / b 
    console.log(`a divisao dos numeros ${a} e ${b} = ${divisao.toFixed(2)}`)
}

calculo(2, 3) // um calculo simples 
