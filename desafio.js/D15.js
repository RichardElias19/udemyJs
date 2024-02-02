function verificar(revenda) {
    switch (revenda) {
        case 'sedan':
            console.log('tem certeza que nao prefere outro modelo ?');
            break;
        case 'motos':
            console.log('tem certeza que nao prefere outro modelo ?');
            break;
        case 'caminhonetes':
            console.log('tem certeza que nao prefere outro modelo ?');
            break;
        case 'hatch':
            console.log('Compra efetuada com sucesso');
            break;

        default:
            console.log('Não trabalhamos com este tipo de automóvel aqui');
    }
}
verificar('sedan')
verificar('motos')
verificar('caminhonetes')
verificar('hatch')
verificar('bike');