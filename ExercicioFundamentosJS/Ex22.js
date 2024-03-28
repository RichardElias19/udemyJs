/**desenvolva uma funcao que receba como parametro um numero de 1 a 10. Internamente na funcao, sera gerado um numero aleatorio de 1 a 10. a funcao devera retornar se o parametro de entrada foi igual ao numero sorteado internamente. se o valor fornecido foi o sorteado, retorne "parabens, o numero sorteado foi o X".se nao for igual retorne "que pena! o numero sorteado foi o X" ex
 
funcaoDaSorte(10) //retornara "parabens, o numero sorteado foi o 10"
funcaoDaSorte(5) //retornara "que pena! o numero sorteado foi o 3"
funcaoDaSorte(5) //retornara "que pena! o numero sorteado foi o 1"
*/

const funcaoDaSorte = numero => {

    const numeroSorteado = Math.floor(Math.random() * 10) + 1; {
    if (numero === numeroSorteado) {
        console.log( `Parabéns, o número sorteado foi o ${numeroSorteado}.`);
      } else {
        console.log( `Que pena! O número sorteado foi o ${numeroSorteado}.`);
      }
    }
}

funcaoDaSorte(10) //retornara "parabens, o numero sorteado foi o 10"
funcaoDaSorte(5) //retornara "que pena! o numero sorteado foi o 3"
funcaoDaSorte(5) //retornara "que pena! o numero sorteado foi o 1"