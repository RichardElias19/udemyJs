function jurosSimples(capital=1, taxa=1, tempo=1) {
    let juros = capital * (1 + taxa * tempo)
    console.log(`a aplicacao simples ${juros.toFixed(2)}`)
    
}

function jurosComposto(capital=1, taxa=1, tempo=1) {
    let juros = capital * (1 + taxa ) ** tempo
    console.log(`a aplicacao composta ${juros.toFixed(2)}`)
    
}

jurosSimples(2000, 0.15, 8)
jurosComposto(2000, 0.15, 8) // juros simple e composto  