/**Elabore uma funcao que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarao num array, conforme exemplo exemplo abaixo. Voce devera calcular a media da nota de cada aluno e retornar um objeto com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas ex:
 
reberMelhorEstudante({
Joao: [8, 7.6, 8.9, 6], // media 7.625
MAriana: [9, 6.6, 7.9, 8],// media 7.875
Carla: [7,7,8,9] // media 7.75
}) // retornara { nome: "Mariana", media: 7.875}
*/

const segundoMaior = lista => {
    lista.sort((a, b) => b - a)
    if (lista.length >= 2) {
        console.log(lista[1])
    } else {
        console.log(lista[1])
    }
}
segundoMaior([12, 16, 1, 5]) // retornará 12
segundoMaior([8, 4, 5, 6]) // retornará 6
function melhorEstudante(notas) {
    let melhorMedia = 0
    let melhorEstudante = ''
    // Itera sobre as chaves (nomes dos estudantes) do objeto
    for (let aluno in notas) {
      // Calcula a média das notas do aluno atual
      let media = notas[aluno].reduce((acumulador, atual) => acumulador + atual, 0) / notas[aluno].length

      // Verifica se a média atual é maior que a melhor média registrada até agora
      if (media > melhorMedia) {
        melhorMedia = media
        melhorEstudante = aluno
      }
    }
    // Retorna o objeto com o nome do melhor aluno e sua média
    return {
      nome: melhorEstudante,
      media: melhorMedia.toFixed(3) // Ajusta a média para ter três casas decimais
    }
  } 
  // Testando a função
  let resultado = melhorEstudante({
    Joao: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9]
  })

  console.log(resultado) // { nome: "Mariana", media: 7.875 }