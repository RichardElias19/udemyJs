let cedula = { 100: 0, 50: 0, 10: 0, 5: 0, 1: 0 } 

function cedulas(valor) {
    while (valor !== 0) {
        if (valor >= 100) {
            cedula[100]++
            valor = valor - 100

        } else if (valor >= 50) {
            cedula[50]++
            valor = valor - 50

        } else if (valor >= 10) {
            cedula[10]++
            valor = valor - 10

        } else if (valor >= 5) {
            cedula[5]++
            valor = valor - 5

        } else if (valor >= 1) {
            cedula[1]++
            valor = valor - 1

        }
    }
    for (let nota in cedula) {
        if (cedula[nota] !== 0) {
            console.log(`${cedula[nota]} nota(s) de R$ ${nota}`);
        }
    }
}
cedulas(156)