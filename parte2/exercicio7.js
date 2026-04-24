function ehPalindromo(palavra) {
  let invertida = "";
  for (let i = palavra.length - 1; i >= 0; i--) {
    invertida += palavra[i];
  }
  return palavra === invertida;
}
console.log(ehPalindromo("aura"));// aura
