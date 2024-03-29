// usando a notaçaõ literal
const objt1 = {}
console.log(objt1)

// object em js 
console.log(typeof Object, typeof new Object)
const objt2 = new Object
console.log(objt2)

// funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getprecoComdesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('caneta', 7.99, 0.15)
const p2 = new Produto('notebook', 2998.99, 0.25)
console.log(p1.getprecoComdesconto(), p2.getprecoComdesconto)


//função factory

function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('joao', 7980, 4)
const f2 = criarFuncionario('maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// object.create

const filha = Object.create(null)
filha.nome = 'ana'
console.log(filha)

// um função famosa que retonar objeto...
const fromJSON = JSON.parse('{"info": "sou um JSON"}')
console.log(fromJSON.info)