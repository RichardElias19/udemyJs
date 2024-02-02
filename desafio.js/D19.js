function lanchonete(codigo, quantidade) {
    switch (codigo) {
        case 100:
             console.log(`${quantidade} Cachorro Quente da R$${(3 * quantidade).toFixed(2)}`)
            break;

        case 200:
            console.log(`${quantidade} Hambúrguer Simples da R$${(4 * quantidade).toFixed(2)}`)
            break;

        case 300:
            console.log(`${quantidade} Cheeseburguer da R$${(5.5 * quantidade).toFixed(2)}`)
            break;

        case 400:
            console.log(`${quantidade} Bauru da R$${(7.5 * quantidade).toFixed(2)}`)
            break;

        case 500:
            console.log(`${quantidade} Refrigerante da R$${(3.5 * quantidade).toFixed(2)}`)
            break;

        case 600:
            console.log(`${quantidade} Suco  da R$${(2.8 * quantidade).toFixed(2)}`)
            break;

        default:
            console.log('Produto nao existe')
    }

}
lanchonete(100, 4)
lanchonete(200, 3)
lanchonete(300, 2)
lanchonete(400, 5)
lanchonete(500, 3)
lanchonete(600, 8)
lanchonete(700, 9)