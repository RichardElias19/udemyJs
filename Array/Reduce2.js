const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Predo', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

console.log(alunos.map(aluno => aluno.nota))
const resultado = alunos.map(aluno => aluno.bolsista).reduce((acumulador, atual) => {
    return acumulador && atual
}, true)
console.log(resultado)



