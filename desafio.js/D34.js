// fuçao boleano , retorna true ou false
function string(string1, string2) {
    const valor1 = string1.toLowerCase()
    const valor2 = string2.toLowerCase()
    
    if(valor1 === valor2) {
        return true
    }else {
        return false
    }
}
console.log(string('casa', 'CASA'))
console.log(string('casa', 'rua'))
