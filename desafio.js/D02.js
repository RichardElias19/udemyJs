function triangulo(T1 = 1, T2 = 1, T3 = 1) {
    if (T1 == T2 && T2 ==T3) {
        console.log('Triangulo equilatero')
    } 
    if (T1 == T2  || T2 == T3){
        if (T1 != T2 || T2 != T3) {
            console.log('triangulo isosceles')
        }
    }
    if (T1 != T2 && T2 != T3) {
        console.log('trangulo escaleno')
    }
}
triangulo(1, 1, 1)
triangulo(2, 3, 3)
triangulo(2, 3, 4) // vereficando lado dos tringulo 