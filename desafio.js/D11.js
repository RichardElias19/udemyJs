function ehAnoBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {  // calculo usado pra achar se o ano e bissexto ou nao
        console.log(`${ano} é um ano bissexto.`);
        return true;
    } else {
        console.log(`${ano} não é um ano bissexto.`);
        return false;
    }
}


const ano1 = 2024;
const ano2 = 2015;

console.log(ehAnoBissexto(ano1)); // Deve imprimir "2000 é um ano bissexto." e retornar true
console.log(ehAnoBissexto(ano2)); // Deve imprimir "2022 não é um ano bissexto." e retornar false
