function arredondarNota(nota) {
    if (nota < 38) {
        return nota;
    }

    const multiplo5 = Math.ceil(nota / 5) * 5;

    const diferenca = multiplo5 - nota;
    if (diferenca < 3) {
        return multiplo5;
    } else {
        return nota;
    }
}

function notaFinal(nota) {
    const notaArredondada = arredondarNota(nota);

    if (notaArredondada >= 40) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

const aluno1 = 96;
const aluno2 = 25;
const aluno3 = 36;
const aluno4 = 55;
const aluno5 = 67;
const aluno6 = 81;

console.log(`Aluno 1: Nota ${aluno1} - ${notaFinal(aluno1)}`);
console.log(`Aluno 2: Nota ${aluno2} - ${notaFinal(aluno2)}`);
console.log(`Aluno 3: Nota ${aluno3} - ${notaFinal(aluno3)}`);
console.log(`Aluno 4: Nota ${aluno4} - ${notaFinal(aluno4)}`);
console.log(`Aluno 5: Nota ${aluno5} - ${notaFinal(aluno5)}`);
console.log(`Aluno 6: Nota ${aluno6} - ${notaFinal(aluno6)}`);
