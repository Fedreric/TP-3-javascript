function mostrarInformacionCadena(cadena) {
    if (cadena === cadena.toUpperCase()) {
        alert("La cadena está formada sólo por mayúsculas");
    } else if (cadena === cadena.toLowerCase()) {
        alert("La cadena está formada sólo por minúsculas");
    } else {
        alert("La cadena está formada por una mezcla de mayúsculas y minúsculas");
    }
}

do {
    let cadenaIngresada = prompt('Ingresa un texto');
    if(isNaN(cadenaIngresada)) {
        mostrarInformacionCadena(cadenaIngresada);
    }else{
        alert('no puedes ingresar solo numeros');
    }   
    
} while (confirm('Desea ingresar otro texto?'));
