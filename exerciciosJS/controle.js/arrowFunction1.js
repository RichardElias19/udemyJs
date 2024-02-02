let lorao = function (obeso) {
    return 2 * obeso
}

dobro = (a) => {
    return 2 * a
}
dobro = a => 2 * a // return implicito

console.log(dobro(Math.PI))

let ola = function () {
    return 'olá'
}

ola = () => 'Ola'
ola = _ => 'Ola' // possui um param
console.log(ola())
arrowFunction2.js
function pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}