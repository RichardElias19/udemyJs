function aumentos(salario = 1420, aumento = 1) {
    switch (aumento) {
        case 10:
            console.log(`O sálario do funcionario era ${salario} e com o plano de aumento ${aumento} ficou ${(salario * 1.10).toFixed(2)}`)
            break
        case 15:
            console.log(`O sálario do funcionario era ${salario} e com o plano de aumento ${aumento} ficou ${(salario * 1.15).toFixed(2)}`)
            break
        case 20:
            console.log(`O sálario do funcionario era ${salario} e com o plano de aumento ${aumento} ficou ${(salario * 1.20).toFixed(2)}`)
            break
        default:
            console.log('plano é inválido')
    }
}

aumentos(1320, 10)
aumentos(1320, 15)
aumentos(1320, 20)
aumentos(1320, 25)