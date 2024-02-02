function moeda(moeda = 1) {
    console.log(`O valor em Real é = R$ ${moeda.toFixed(2).replace('.',',')}`)
    console.log(`O valor em Euro é = € ${moeda.toFixed(2).replace('.',',')}`)
    console.log(`O valor em Dolár é = $ ${moeda.toFixed(2).replace('.',',')}`)
}
moeda(68.999999)
