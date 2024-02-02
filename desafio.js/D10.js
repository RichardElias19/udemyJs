function dividirpor3(n) {
    return n % 3 === 0
}
const numero1 = 9;
const numero2 = 7;

console.log(`${numero1} é divisível por 3? ${dividirpor3(numero1)}`); // Deve imprimir true
console.log(`${numero2} é divisível por 3? ${dividirpor3(numero2)}`); // Deve imprimir false