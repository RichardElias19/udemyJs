function calcular(n1=1, operacao='', n2=1) {
    let resultado = 0;
    switch (operacao) {
        case '+':
            console.log(n1 + n2)
             
            break;
        case '-':
            console.log(n1 - n2)

            break;
        case '*':
            console.log(n1 * n2)

            break;
        case '/':
            if (n2 !== 0) {
                resultado = n1 / n2;
            } else {
                console.log('Erro, divisao por 0');
                return;
            }
            break;
        default:
            console.log('operacao errada');
            return;

    }
    
}
calcular(4, '-', 8);