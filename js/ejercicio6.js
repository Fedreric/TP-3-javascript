const perimetro = (a, b) => {
    return 2 * (a + b)
}

const mensaje = lado => `Ingresa el lado ${lado} del rectangulo                           
lado B 
   |                           
   |_________________
           Lado A      `

do {
    const ladoA = parseInt(prompt(mensaje('A')));
    const ladoB = parseInt(prompt(mensaje('B')));

    if (!isNaN(ladoA) && !isNaN(ladoB)) {
        if (ladoA > 0 && ladoB > 0 && ladoA != ladoB) {
            alert(`Rectangulo:
                    Lado A: ${ladoA}
                    Lado B: ${ladoB}
                    Perimetro: ${perimetro(ladoA, ladoB)}`);
        } else {
            alert('ninguno de los 2 lados puede ser 0 y tampoco pueden ser iguales (Es un rectangulo) )')
        }
    } else {
        alert('Solo puedes ingresar numeros');
    }
} while (confirm('¿Deseas probar de nuevo?'));


