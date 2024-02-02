function verificar(fruta) {
    switch (fruta) {
        case 'maça':
            console.log('nao vendemos esta fruta aqui');
            break;
        case 'kiwi':
            console.log('Estamos com escassez de kiwis');
            break;
        case 'melacia':
            console.log('Aqui esta, sao 3 reais o kilo');
            break;
    
        default:
            console.log('Erro: fruta nao reconhecida');
    }
}
verificar('maça')
verificar('kiwi')
verificar('melancia');