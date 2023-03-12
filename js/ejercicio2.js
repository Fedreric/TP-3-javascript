function recorrerAreglo (arreglo){
    document.write('<ol>');
    for(let i = 0; i < arreglo.length; i++){
        document.write(`<li>${arreglo[i]}</li>`);
    }
    document.write('</ol>');
}

let bandera = 0;
let ciudades = [];
do{ 
    let frase = prompt('Ingresa una ciudad');
    if(isNaN(frase)){
        ciudades.push(frase);
    if (!confirm('Ingresa otra ciudad, preciona CANCELAR cuando desees finalizar.') == true){ 
        bandera++;
      }
    }else{
        alert('Por favor ingresa solo letas');
    }    
}while(bandera === 0);

document.write('<h3>Arreglo</h3>');
recorrerAreglo(ciudades);
document.write('<h3>Longitud del arreglo</h3>');
document.write(ciudades.length);

document.write('<h3>Primera, tercera y ultima posicion del arreglo</h3>');
for(let i = 0; i < ciudades.length; i++){
    if(i === 0 || i === 2 || i === ciudades.length -1){
        document.write(ciudades[i] + ' ');
    }
}

document.write('<h3>Se agrega "Paris" al final del arreglo</h3>');
ciudades.push('Paris');
recorrerAreglo(ciudades);
document.write('<h3>Se muerstra el segundo elemento</h3>');
document.write(ciudades[1]);
document.write('<h3>Se cambia el segundo elemento por "Barcelona"</h3>');
ciudades[1] = 'Barcelona';
recorrerAreglo(ciudades);
