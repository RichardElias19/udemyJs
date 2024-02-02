const lista = [12, 14, 11, 9, 7, 3, 16, 18]
let impar = 0
let par = 0
for(indice in lista) {
    
    if(lista[indice] % 2 === 0) {
        par = par + 1
    } else {
        impar = impar + 1
    }
    // for pra array e obj
 
}
console.log(`essa lista tem tantos numeros ${par} PAR e tantos numeros ${impar}IMPAR`) 
