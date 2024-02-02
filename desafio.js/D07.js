const bhaskara = (ax2, bx, c) => {
    let delta = (bx ** 2) - (4 * ax2 * c);
    console.log(`o delta e ${delta}`)
    if (delta > 0) {
        
    
    let x1 = (-bx + Math.sqrt(delta)) / 2 * ax2;
    let x2 = (-bx - Math.sqrt(delta)) / 2 * ax2;
    console.log(`[${x1}, ${x2}]`);
    } else {
        console.log('Delta negativo')
    }

}
bhaskara(1, 12, -13) // uma formula que calcula bhaskara no js