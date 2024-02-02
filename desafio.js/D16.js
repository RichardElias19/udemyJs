
function calculadora(valor1 = 1, valor2 = 1, operacao = '') {
    switch (operacao) {
        case 'soma':
            console.log(`${valor1} + ${valor2} = ${valor1 + valor2}`)
            break
        case 'subtração':
            console.log(`${valor1} - ${valor2} = ${valor1 - valor2}`)
            break
        case 'multiplicação':
            console.log(`${valor1} * ${valor2} = ${valor1 * valor2}`)
            break
        case 'divisão':
            console.log(`${valor1} / ${valor2} = ${valor1 / valor2}`)
            break
        default:
            console.log(`ERRO!!! A operação ${operacao} não foi encotrada!`)
            break
    }
}

calculadora(5, 5, 'soma')
calculadora(5, 5, 'subtração')
calculadora(5, 5, 'multiplicação')
calculadora(5, 5, 'divisão')
calculadora(5, 5, 'Potenciação') 