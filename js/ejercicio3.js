
let resultado = [];

for(let i = 0; i < 50; i++){
  let dado1 = Math.floor(Math.random() * 6) + 1;
  let dado2 = Math.floor(Math.random() * 6) + 1;

  let sum = dado1 + dado2;

  if(resultado[sum] === undefined){
    resultado[sum] = 1;
  }else{
    resultado[sum]++;
  }
}

for(let i = 2; i <= 12; i++){
  document.write(`El número ${i} apareció ${resultado[i]} veces.<br>`);
}