function analisarPontuacoes(pontuacoes) {
    // Converte a string de pontuações em um array de números
    const pontuacoesArray = pontuacoes.split(' ').map(Number); // o map  é utilizada para percorrer cada item de um array

    // Inicializa as variáveis de contagem e controle
    let recordeMaximo = pontuacoesArray[0];
    let recordeMinimo = pontuacoesArray[0];
    let quebrouRecordeMaximo = 0;
    let piorJogo = 0;

    // Itera sobre as pontuações
    for (let i = 1; i < pontuacoesArray.length; i++) {
        if (pontuacoesArray[i] > recordeMaximo) {
            recordeMaximo = pontuacoesArray[i];
            quebrouRecordeMaximo++;
        } else if (pontuacoesArray[i] < recordeMinimo) {
            recordeMinimo = pontuacoesArray[i];
            piorJogo = i;
        }
    }

    // Retorna um vetor com a quantidade de vezes que bateu o recorde máximo e o número do pior jogo
    return [quebrouRecordeMaximo, piorJogo + 1];
}

// Exemplo de uso:
const pontuacoesString = "10 20 20 8 25 3 0 30 1";
const resultado = analisarPontuacoes(pontuacoesString);
console.log(`Número de vezes que bateu o recorde máximo: ${resultado[0]}`);
console.log(`Número do pior jogo: ${resultado[1]}`);
