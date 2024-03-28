/** Desenvolva uma função que recebe um objeto como parãmetro e retorne um outro que corresponde ao objeto recebido como parâmetro, porém com as chaves e valores invertidas, conforme exemplo a seguir:
 
inverter({a: 1, b: 2, c: 3}) retornará { 1: "a", 2: "b", 3: "c" }
*/ 


const inverter = objeto => {
    const objeto2 = {}
    for(indice in objeto){
        let valor =  objeto[indice]
        objeto2[valor] = indice
    }
    console.log(objeto2)
}

inverter({a: 1, b: 2, c: 3}) //retornará { 1: "a", 2: "b", 3: "c" }