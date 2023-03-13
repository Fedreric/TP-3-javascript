function generarTabla(num) {
    document.write(`<h1>Tabla del ${num}</h1>`);
    document.write(`<table border="1">
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
}












const num = parseInt(prompt('Ingresa un numero'));

generarTabla(num);