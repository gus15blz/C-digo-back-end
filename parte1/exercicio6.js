//por isso eu prefiro c#
function contarLetraA(palavra) {
  let contador = 0;

  for (let i = 0; i < palavra.length; i++) {
    if (palavra[i] === 'a') {
      contador++;
    }
  }
  return contador;
}
console.log(contarLetraA("Paralelogramaticamente")); 
