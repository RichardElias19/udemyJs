function anuidade(mes,aluguel){
    for(let indice = 1; indice <= mes; indice++){
        valorTotal =  0.05 * aluguel
        aluguel += valorTotal
    }
    console.log(`Do mês 1 até o mês ${mes} o valor total com juros é R$${parseInt(aluguel).toFixed(2).replace('.',',')}`)
}

anuidade(100,800)
anuidade(7,1000)
anuidade(2,50)