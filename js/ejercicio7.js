function generarTabla(num) {
    document.write('<section class = "contenedor">');
    document.write(`<h1>Tabla del ${num}</h1>`);
    document.write(`<table>
                           <tbody>`);                 
    for (let i = 1; i <= 10; i++) {
        document.write('<tr>');
        document.write(`<td style="
                            padding: 10px;"
                            >${num} x ${i}
                            </td>`)
        document.write(`<td style="
                            padding: 10px;"
                            >${num * i}
                            </td>`);
        document.write('</tr>');
    }

    document.write(`    </tbody>
                    </table>`);
    document.write('</section>');
}

    const num = parseInt(prompt('Ingresa un numero'));
    if(!isNaN(num)){
        generarTabla(num);
    }else{
        alert('Solo se pueden ingresar numeros');
    }
