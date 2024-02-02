for(let contador = 1; contador <= 100; contador++ ) {
    if(contador % 2 === 0) { // se o resto da divisao
        console.log(`PAR ${contador}`)
    }
    if(contador % 2 === 1) {
        console.log(`IMPAR ${contador}`)
    }
}

let cont = 1 
while(cont <= 100 ) {
    if(cont % 2 === 0) {
        console.log(`par ${cont}`)
    
    } else {
        console.log(`impar ${cont}`)
    }
    cont++
}
