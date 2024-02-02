function Fatorial(numero) {
    if (numero < 0) {
        return "Não é possível calcular o fatorial de um número negativo.";
    } else if (numero === 0 || numero === 1) {
        return 1;
    } else {
        let resultado = 1;
        for (let i = 2; i <= numero; i++) {
            resultado *= i;
        }
        return resultado;
    }
}


const numero = 5;
console.log(`O fatorial de ${numero} é: ${Fatorial(numero)}`);
