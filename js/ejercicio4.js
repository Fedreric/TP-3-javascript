function parOImpar(numero) {
    return numero % 2 === 0 ? `${numero} es par` : `${numero} es impar`
}

do {
    const num = parseInt(prompt('Escribe un numero'));
    if(!isNaN(num)){
        alert(parOImpar(num));
    }else{
        alert('Solo puedes ingresar numeros');
    }
} while (confirm('Desea ingresar otro numero?'));

