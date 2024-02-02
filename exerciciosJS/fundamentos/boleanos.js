let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1 
confirm.log(!!isAtivo) // uma ! significa nao        duas !! signica nao nao 

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!'')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falso...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(isAtivo = false)

console.log('pra finalizar')
console.log(!!(11 || null || 0 || ' '))

let nome = ''
console.log(nome || 'Desconhecido')