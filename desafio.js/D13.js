function verificar(dia) {
    switch (dia) {
        case 1:
            console.log("Domingo  Fim de semana");
            break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            console.log("Semana Dias uteis");
            break;
        case 7:
            console.log("Sabado Fim de semana");
            break;
        default:
            console.log("Dia invalido");
    }
}


verificar(1); // Domingo  Fim de semana
verificar(3); // Dia util
verificar(7); // Sabado  Fim de semana
verificar(10); // Dia inválido
 

// switch pra ver os dias da semana