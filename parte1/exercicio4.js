function Pares(numeros) {
  let contador = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      contador++;
    }
  }
  return contador;
}
const resultado = Pares([1, 2, 3, 4, 6, 7]);
console.log(resultado);
