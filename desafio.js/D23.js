function resultado(nota1,nota2,nota3) {
    const media = ((nota1=4) + (nota2=3) + (nota3 * 3)) / 10

    if (media >= 5) {
        console.log(`Parabéns você esta com a média em ${media.toFixed(1)} pontos e foi APROVADO!!!`)
    } else {
        console.log(`Sua média foi de ${media.toFixed(1)} e você não passou dessa vez!`)
    }

}

resultado(7, 3, 5)
resultado(3, 6, 3)
resultado(-13,2,2)